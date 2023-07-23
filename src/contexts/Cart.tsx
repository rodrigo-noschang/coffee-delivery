import { ReactNode, createContext, useContext, useState } from "react";

import { CoffeeType } from "../components/Coffee";
import { database_coffees } from "../utils/database";

export interface CoffeeInCartType extends CoffeeType {
    amountInCart: number
}

interface CartContextData {
    coffeeList: CoffeeInCartType[],

    addCoffeeToCart: (coffeeId: string, amount: number) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface ProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: ProviderProps) => {
    const [coffeeList, setCoffeeList] = useState<CoffeeInCartType[]>([]);

    function addCoffeeToCart(coffeeId: string, amount: number) {
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

    return (
        <CartContext.Provider value={{
            coffeeList,
            addCoffeeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);