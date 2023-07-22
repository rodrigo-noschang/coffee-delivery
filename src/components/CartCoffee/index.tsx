import { Minus, Plus, Trash } from '@phosphor-icons/react';

import ExpressoTradicional from '../../assets/products/expresso-tradicional.png';

import {
    CartCoffeeAmountContainer,
    CartCoffeeContainer,
    CartCoffeeImageContainer,
    CartCoffeeInfoContainer,
    CartCoffeeOptionsContainer,
    CartCoffeePrice,
    CartCoffeeRemoveContainer,
} from './styles';

export function CartCoffee() {
    return (
        <CartCoffeeContainer>
            <CartCoffeeImageContainer>
                <img src={ExpressoTradicional} alt="" />
            </CartCoffeeImageContainer>

            <CartCoffeeInfoContainer>
                <div className='coffee-name'>
                    Expresso tradicional
                </div>
                <CartCoffeeOptionsContainer>
                    <CartCoffeeAmountContainer>
                        <span>
                            <Minus size={13} weight='bold' />
                        </span>
                        <span> 1 </span>
                        <span>
                            <Plus size={13} weight='bold' />
                        </span>
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
                R$ 19,80
            </CartCoffeePrice>
        </CartCoffeeContainer>
    )
}