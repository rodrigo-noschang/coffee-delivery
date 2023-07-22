import { ReactNode, createContext, useContext, useState } from "react";

import { CoffeeType } from "../components/Coffee";

export interface CoffeeInCartType extends CoffeeType {
    amountInCart: number
}

interface CartContextData {
    coffeeList: CoffeeInCartType[],
}

const CartContext = createContext<CartContextData>({} as CartContextData);

interface ProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: ProviderProps) => {
    const [coffeeList, setCoffeeList] = useState<CoffeeInCartType[]>([]);


    return (
        <CartContext.Provider value={{
            coffeeList
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);