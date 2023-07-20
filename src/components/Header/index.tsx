import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import Logo from '../../assets/coffee-delivery-logo.svg';

import {
    HeaderContainer,
    IconsContainer,
    LocationInfoContainer,
    ShoppingCartContainer
} from './styles';
import { ContentWidthLimiter } from '../ContentWidthLimiter';

export function Header() {

    return (
        <ContentWidthLimiter>
            <HeaderContainer>
                <div>
                    <img src={Logo} alt='' />
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