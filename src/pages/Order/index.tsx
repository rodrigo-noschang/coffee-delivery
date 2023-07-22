import { AddressForm } from "../../components/AddressForm";
import { CartList } from "../../components/CartList";
import { PaymentMethod } from "../../components/PaymentMethod";
import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";

import { useCartContext } from "../../contexts/Cart";

import { OrderContainer, OrderInfoContainer, OrderLeftSideContainer, OrderRightSideContainer } from "./styles";

export function Order() {
    const { coffeeList } = useCartContext();

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
                    </OrderInfoContainer>

                </OrderRightSideContainer>
            </OrderContainer>
        </ContentWidthLimiter>
    )
}