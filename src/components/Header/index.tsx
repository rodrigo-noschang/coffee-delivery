import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

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
                    <Link to={'/'}>
                        <img src={Logo} alt='' />
                    </Link>
                </div>

                <IconsContainer>
                    <LocationInfoContainer>
                        <MapPin size={24} weight='fill' />
                        <span> Porto Alegre, RS </span>
                    </LocationInfoContainer>

                    <ShoppingCartContainer>
                        <Link to='/order'>
                            <ShoppingCart size={24} weight='fill' />
                        </Link>
                    </ShoppingCartContainer>
                </IconsContainer>

            </HeaderContainer>
        </ContentWidthLimiter>
    )
}