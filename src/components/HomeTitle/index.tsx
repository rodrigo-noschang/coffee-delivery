import { ShoppingCart } from '@phosphor-icons/react';

import { AdvantagesContainer, HomeTitleContainer, LeftSideContainer } from "./styles"

import CoffeeCup from '../../assets/coffee-cup.svg';

export function HomeTitle() {
    return (
        <HomeTitleContainer>
            <LeftSideContainer>
                <h1> Encontre o café perfeito para qualquer hora do dia </h1>

                <h2>
                    Com o
                    <span> Coffe Delivery </span>
                    você recebe seu café onde estiver, a qualquer hora
                </h2>

                <AdvantagesContainer>
                    <div>
                        <ShoppingCart size={20} weight='fill' />
                        <span> Compra simples e segure </span>
                    </div>

                    <div>
                        <ShoppingCart size={20} weight='fill' />
                        <span> Compra simples e segure </span>
                    </div>

                    <div>
                        <ShoppingCart size={20} weight='fill' />
                        <span> Compra simples e segure </span>
                    </div>

                    <div>
                        <ShoppingCart size={20} weight='fill' />
                        <span> Compra simples e segure </span>
                    </div>
                </AdvantagesContainer>
            </LeftSideContainer>

            {/* <div>
                <img src={CoffeeCup} alt="" />
            </div> */}
        </HomeTitleContainer>
    )
}