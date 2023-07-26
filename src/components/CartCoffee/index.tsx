import { Minus, Plus, Trash } from '@phosphor-icons/react';

import {
    CartCoffeeAmountContainer,
    CartCoffeeContainer,
    CartCoffeeImageContainer,
    CartCoffeeInfoContainer,
    CartCoffeeOptionsContainer,
    CartCoffeePrice,
    CartCoffeeRemoveContainer,
} from './styles';

import { CoffeeInCartType, useCartContext } from '../../contexts/Cart';

interface CartCoffeeProps {
    coffee: CoffeeInCartType
}

export function CartCoffee({ coffee }: CartCoffeeProps) {
    const { updateCoffeeAmountInCart, removeCoffeeFromCart } = useCartContext();

    function increaseCartAmount() {
        updateCoffeeAmountInCart(coffee.id, coffee.amountInCart + 1);
    }

    function decreaseCartAmount() {
        const updatedAmount = coffee.amountInCart > 1 ? coffee.amountInCart - 1 : 1;
        updateCoffeeAmountInCart(coffee.id, updatedAmount);
    }

    function handleRemoveCoffeeFromCart() {
        removeCoffeeFromCart(coffee.id);
    }

    return (
        <CartCoffeeContainer>
            <CartCoffeeImageContainer>
                <img src={coffee.image_component} alt="" />
            </CartCoffeeImageContainer>

            <CartCoffeeInfoContainer>
                <div className='coffee-name'>
                    {coffee.name}
                </div>
                <CartCoffeeOptionsContainer>
                    <CartCoffeeAmountContainer>
                        <button onClick={decreaseCartAmount}>
                            <Minus size={13} weight='bold' />
                        </button>
                        <span> {coffee.amountInCart} </span>
                        <button onClick={increaseCartAmount}>
                            <Plus size={13} weight='bold' />
                        </button>
                    </CartCoffeeAmountContainer>

                    <CartCoffeeRemoveContainer onClick={handleRemoveCoffeeFromCart}>
                        <span>
                            <Trash size={17} />
                        </span>
                        <span>
                            REMOVER
                        </span>
                    </CartCoffeeRemoveContainer>
                </CartCoffeeOptionsContainer>
            </CartCoffeeInfoContainer>

            <CartCoffeePrice>
                R$ {coffee.price.toFixed(2).replace('.', ',')}
            </CartCoffeePrice>
        </CartCoffeeContainer>
    )
}