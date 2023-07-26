import { ReactNode, createContext, useContext, useState } from "react";

import { CoffeeType } from "../components/Coffee";
import { database_coffees } from "../utils/database";

export interface CoffeeInCartType extends CoffeeType {
    amountInCart: number
}

interface CartContextData {
    cartTotal: number,
    coffeeList: CoffeeInCartType[],

    addCoffeeToCart: (coffeeId: string, amount: number) => void,
    removeCoffeeFromCart: (coffeeId: string) => void
    updateCoffeeAmountInCart: (coffeeId: string, amount: number) => void,
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface ProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: ProviderProps) => {
    const [coffeeList, setCoffeeList] = useState<CoffeeInCartType[]>([]);

    const cartTotal = coffeeList.reduce((acc, curr) => {
        return acc + (curr.price * curr.amountInCart);
    }, 0);

    function addCoffeeToCart(coffeeId: string, amount: number) {
        const coffeeAlreadyInCart = coffeeList.find(coffee => {
            return coffee.id === coffeeId;
        })

        if (coffeeAlreadyInCart) {
            coffeeAlreadyInCart.amountInCart += 1;
            setCoffeeList(prevState => [...prevState]);
            return;
        }

        const selectedCoffee = database_coffees.find(coffee => {
            return coffeeId === coffee.id;
        })

        if (!selectedCoffee) return;

        const coffeeInCart: CoffeeInCartType = {
            ...selectedCoffee,
            amountInCart: amount
        }

        setCoffeeList(prevState => [...prevState, coffeeInCart]);
    }

    function updateCoffeeAmountInCart(coffeeId: string, amount: number) {
        const coffee = coffeeList.find(coffee => {
            return coffee.id === coffeeId;
        })

        if (!coffee) return;

        coffee.amountInCart = amount;
        setCoffeeList(prevState => [...prevState]);
    }

    function removeCoffeeFromCart(coffeeId: string) {
        const cartWithoutRemovedCart = coffeeList.filter(coffee => {
            return coffee.id !== coffeeId;
        })

        setCoffeeList(cartWithoutRemovedCart);
    }

    return (
        <CartContext.Provider value={{
            cartTotal,
            coffeeList,
            addCoffeeToCart,
            removeCoffeeFromCart,
            updateCoffeeAmountInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);