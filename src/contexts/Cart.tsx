import { ReactNode, createContext, useContext, useState, useEffect } from "react";

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
    const storedCoffeeList = localStorage.getItem('@coffee-delivery:coffeeList');
    const [coffeeList, setCoffeeList] = useState<CoffeeInCartType[]>(
        storedCoffeeList ?
            JSON.parse(storedCoffeeList) as CoffeeInCartType[]
            : []
    );

    const cartTotal = coffeeList.reduce((acc, curr) => {
        return acc + (curr.price * curr.amountInCart);
    }, 0);

    function findCoffeeFromDatabaseById(coffeeId: string) {
        const coffee = database_coffees.find(coffee => {
            return coffee.id === coffeeId;
        })

        return coffee ?? null;
    }

    function findCoffeeFromCartById(coffeeId: string) {
        const coffee = coffeeList.find(coffee => {
            return coffee.id === coffeeId;
        })

        return coffee ?? null;
    }

    function addCoffeeToCart(coffeeId: string, amount: number) {
        const coffeeAlreadyInCart = findCoffeeFromCartById(coffeeId);

        if (coffeeAlreadyInCart) {
            coffeeAlreadyInCart.amountInCart += amount;
            setCoffeeList([...coffeeList]);

            return;
        }

        const newCoffee = findCoffeeFromDatabaseById(coffeeId);

        if (newCoffee) {
            const addableCoffee = {
                ...newCoffee,
                amountInCart: amount
            }

            setCoffeeList([...coffeeList, addableCoffee]);
        }
    }

    function updateCoffeeAmountInCart(coffeeId: string, amount: number) {
        const coffee = findCoffeeFromCartById(coffeeId);
        if (!coffee) return;

        coffee.amountInCart = amount;
        setCoffeeList([...coffeeList]);
    }

    function removeCoffeeFromCart(coffeeId: string) {
        const cartWithoutCoffee = coffeeList.filter(coffee => {
            return coffee.id !== coffeeId
        });

        setCoffeeList(cartWithoutCoffee);
    }

    useEffect(() => {
        localStorage.setItem('@coffee-delivery:coffeeList', JSON.stringify(coffeeList));
    }, [coffeeList])

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