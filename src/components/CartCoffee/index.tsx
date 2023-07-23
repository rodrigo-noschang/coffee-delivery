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

import { CoffeeInCartType } from '../../contexts/Cart';

interface CartCoffeeProps {
    coffee: CoffeeInCartType
}

export function CartCoffee({ coffee }: CartCoffeeProps) {
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
                        <button>
                            <Minus size={13} weight='bold' />
                        </button>
                        <span> {coffee.amountInCart} </span>
                        <button>
                            <Plus size={13} weight='bold' />
                        </button>
                    </CartCoffeeAmountContainer>

                    <CartCoffeeRemoveContainer>
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