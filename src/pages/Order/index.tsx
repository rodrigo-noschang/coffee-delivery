import { CartInfo } from "../../components/CartInfo";
import { CartList } from "../../components/CartList";
import { AddressForm } from "../../components/AddressForm";
import { PaymentMethod } from "../../components/PaymentMethod";
import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";

import {
    OrderContainer,
    OrderInfoContainer,
    OrderLeftSideContainer,
    OrderRightSideContainer
} from "./styles";

export function Order() {
    return (
        <ContentWidthLimiter>
            <OrderContainer>
                <OrderLeftSideContainer>
                    <h2>
                        Complete seu pedido
                    </h2>

                    <AddressForm />
                    <PaymentMethod />
                </OrderLeftSideContainer>

                <OrderRightSideContainer>
                    <h2>
                        Cafés selecionados
                    </h2>

                    <OrderInfoContainer>
                        <CartList />
                        <CartInfo />
                    </OrderInfoContainer>

                </OrderRightSideContainer>
            </OrderContainer>
        </ContentWidthLimiter>
    )
}