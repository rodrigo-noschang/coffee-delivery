import { MapPin, CurrencyDollar, Timer } from '@phosphor-icons/react';

import { useCustomerInfoContext } from '../../contexts/CustomerInfo';

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
    const { address, paymentMethod } = useCustomerInfoContext();

    // console.log(selectedMethod);

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
                                        Entrega em <span className='highlight'> {address.street}, {address.number} </span>
                                    </div>
                                    <div>
                                        {address.neighborhood ?
                                            `${address.neighborhood} - `
                                            : ''
                                        }
                                        {
                                            `${address.city}, ${address.state}`
                                        }
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
                                        {paymentMethod}
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