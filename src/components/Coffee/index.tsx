import { useState } from 'react';
import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react';

import {
    PriceInfo,
    AmountContainer,
    CoffeeContainer,
    AddToKartContainer,
    CategoriesContainer,
    PurchaseInfoContainer,
} from "./styles";

import { useCartContext } from '../../contexts/Cart';

export interface CoffeeType {
    id: string,
    name: string,
    description: string,
    price: number,
    categories: string[],
    image_component: string
}

interface CoffeeProps {
    coffeeData: CoffeeType
}

export function Coffee({ coffeeData }: CoffeeProps) {
    const [amount, setAmount] = useState(1);
    const { addCoffeeToCart } = useCartContext();

    function increaseAmount() {
        setAmount(prevState => prevState + 1);
    }

    function decreaseAmount() {
        if (amount > 1) {
            setAmount(prevState => prevState - 1);
        }
    }

    function handleAddCoffeeToCart() {
        addCoffeeToCart(coffeeData.id, amount);
    }

    return (
        <CoffeeContainer>
            <div>
                <img src={coffeeData.image_component} alt="" />

                <CategoriesContainer>
                    {
                        coffeeData.categories.map(category => {
                            return (
                                <span key={`${coffeeData.id}-${category}`}>
                                    {category}
                                </span>
                            )
                        })
                    }
                </CategoriesContainer>

                <h3> {coffeeData.name} </h3>

                <p> {coffeeData.description} </p>
            </div>

            <PurchaseInfoContainer>
                <PriceInfo>
                    <span> R$ </span>
                    <span> {coffeeData.price.toFixed(2).replace('.', ',')} </span>
                </PriceInfo>

                <AmountContainer>
                    <button onClick={decreaseAmount}>
                        <Minus size={14} weight='bold' />
                    </button>
                    <span> {amount} </span>
                    <button onClick={increaseAmount}>
                        <Plus size={14} weight='bold' />
                    </button>
                </AmountContainer>

                <AddToKartContainer onClick={handleAddCoffeeToCart}>
                    <ShoppingCartSimple size={20} weight='fill' />
                </AddToKartContainer>
            </PurchaseInfoContainer>
        </CoffeeContainer>
    )
}