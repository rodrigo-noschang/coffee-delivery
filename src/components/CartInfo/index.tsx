import {
    CartInfoContainer,
    CartInfoRow,
    CartRowTotal,
    PlaceOrder
} from "./styles";

export function CartInfo() {
    return (
        <CartInfoContainer>
            <CartInfoRow>
                <span>
                    Total de itens
                </span>

                <span>
                    R$ 29,70
                </span>
            </CartInfoRow>

            <CartInfoRow>
                <span>
                    Entrega
                </span>

                <span>
                    R$ 3,50
                </span>
            </CartInfoRow>

            <CartRowTotal>
                <span>
                    Total
                </span>

                <span>
                    R$ 33,20
                </span>
            </CartRowTotal>

            <PlaceOrder>
                CONFIRMAR PEDIDO
            </PlaceOrder>
        </CartInfoContainer>
    )
}