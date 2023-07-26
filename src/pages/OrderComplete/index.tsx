import { MapPin, CurrencyDollar, Timer } from '@phosphor-icons/react';

import { ContentWidthLimiter } from "../../components/ContentWidthLimiter"

import {
    AddressInfoContainer,
    BorderEffect,
    CompleteOrderDeliveryTimeInfo,
    CompleteOrderLocationInfo,
    CompleteOrderPaymentInfo,
    OrderCompleteContainer,
    OrderCompleteLeftSideContainer,
    OrderCompleteRightSideContainer
} from "./styles"

import DeliveryImage from '../../assets/delivery.png';

export function OrderComplete() {
    return (
        <ContentWidthLimiter>
            <OrderCompleteContainer>
                <OrderCompleteLeftSideContainer>
                    <h2> Uhu! Pedido confirmado </h2>
                    <div>
                        Agora é só aguardar que logo o café chegará até você
                    </div>

                    <BorderEffect>
                        <AddressInfoContainer>
                            <CompleteOrderLocationInfo>
                                <span className='icon-container'>
                                    <MapPin size={14} weight='fill' />
                                </span>
                                <div>
                                    <div>
                                        Entrega em <span className='highlight'> Rua João Daniel Martinelli, 102 </span>
                                    </div>
                                    <div>
                                        Farrapos - Porto Alegre, RS
                                    </div>
                                </div>
                            </CompleteOrderLocationInfo>

                            <CompleteOrderDeliveryTimeInfo>
                                <span className='icon-container'>
                                    <Timer size={14} weight='fill' />
                                </span>
                                <div>
                                    <div>
                                        Previsão de entrega
                                    </div>
                                    <div className='highlight'>
                                        20 min - 30 min
                                    </div>
                                </div>
                            </CompleteOrderDeliveryTimeInfo>

                            <CompleteOrderPaymentInfo>
                                <span className='icon-container'>
                                    <CurrencyDollar size={14} />
                                </span>
                                <div>
                                    <div>
                                        Pagamento na entrega
                                    </div>
                                    <div className='highlight'>
                                        Cartão de Crédito
                                    </div>
                                </div>
                            </CompleteOrderPaymentInfo>
                        </AddressInfoContainer>
                    </BorderEffect>
                </OrderCompleteLeftSideContainer>

                <OrderCompleteRightSideContainer>
                    <img src={DeliveryImage} alt="" />
                </OrderCompleteRightSideContainer>
            </OrderCompleteContainer>
        </ContentWidthLimiter>
    )

}