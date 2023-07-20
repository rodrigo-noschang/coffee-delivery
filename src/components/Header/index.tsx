import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import Logo from '../../assets/coffee-delivery-logo.svg';

import { database_coffees } from '../../utils/database';

import {
    HeaderContainer,
    IconsContainer,
    LocationInfoContainer,
    ShoppingCartContainer
} from './styles';
import { ContentWidthLimiter } from '../ContentWidthLimiter';

export function Header() {

    const coffee = database_coffees[0];

    return (
        <ContentWidthLimiter>
            <HeaderContainer>
                <div>
                    <img src={Logo} alt='' />
                    <img src={coffee.image_component} alt='' />
                </div>

                <IconsContainer>
                    <LocationInfoContainer>
                        <MapPin size={24} weight='fill' />
                        <span> Porto Alegre, RS </span>
                    </LocationInfoContainer>

                    <ShoppingCartContainer>
                        <ShoppingCart size={24} weight='fill' />
                    </ShoppingCartContainer>
                </IconsContainer>

            </HeaderContainer>
        </ContentWidthLimiter>
    )
}