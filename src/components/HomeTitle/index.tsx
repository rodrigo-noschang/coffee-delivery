import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import {
    Advantage,
    LeftSideContainer,
    RightSideContainer,
    HomeTitleContainer,
    AdvantagesContainer,
    BackgroundExtensor
} from "./styles"

import { ContentWidthLimiter } from '../ContentWidthLimiter';

import CoffeeCup from '../../assets/coffee-cup.svg';

export function HomeTitle() {
    return (
        <BackgroundExtensor>
            <ContentWidthLimiter>
                <HomeTitleContainer>
                    <LeftSideContainer>
                        <h1> Encontre o café perfeito para qualquer hora do dia </h1>

                        <h2>
                            Com o
                            <span> Coffe Delivery </span>
                            você recebe seu café onde estiver, a qualquer hora
                        </h2>

                        <AdvantagesContainer>
                            <Advantage bgColor='orange'>
                                <span>
                                    <ShoppingCart size={20} weight='fill' />
                                </span>
                                <span> Compra simples e segure </span>
                            </Advantage>

                            <Advantage bgColor='yellow'>
                                <span>
                                    <Timer size={20} weight='fill' />
                                </span>
                                <span> Entrega rápida e rastreada </span>
                            </Advantage>

                            <Advantage bgColor='grey'>
                                <span>
                                    <Package size={20} weight='fill' />
                                </span>
                                <span> Embalagem mantem o café intacto </span>
                            </Advantage>

                            <Advantage bgColor='purple'>
                                <span>
                                    <Coffee size={20} weight='fill' />
                                </span>
                                <span> O café chega fresquinho até você </span>
                            </Advantage>
                        </AdvantagesContainer>
                    </LeftSideContainer>

                    <RightSideContainer>
                        <img src={CoffeeCup} alt="" />
                    </RightSideContainer>
                </HomeTitleContainer>
            </ContentWidthLimiter>
        </BackgroundExtensor>
    )
}