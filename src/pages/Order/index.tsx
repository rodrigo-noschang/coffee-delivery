import { AddressForm } from "../../components/AddressForm";
import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";
import { PaymentMethod } from "../../components/PaymentMethod";

import { OrderContainer } from "./styles";

export function Order() {
    return (
        <ContentWidthLimiter>
            <OrderContainer>
                <div>
                    <AddressForm />
                    <PaymentMethod />
                </div>
            </OrderContainer>
        </ContentWidthLimiter>
    )
}