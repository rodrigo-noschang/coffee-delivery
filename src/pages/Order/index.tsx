import { AddressForm } from "../../components/AddressForm";
import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";

import { OrderContainer } from "./styles";

export function Order() {
    return (
        <ContentWidthLimiter>
            <OrderContainer>
                <div>
                    <AddressForm />
                </div>
            </OrderContainer>
        </ContentWidthLimiter>
    )
}