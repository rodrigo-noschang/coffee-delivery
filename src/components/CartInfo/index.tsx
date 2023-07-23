import { useCartContext } from "../../contexts/Cart";

import {
    CartInfoContainer,
    CartInfoRow,
    CartRowTotal,
    PlaceOrder
} from "./styles";

export function CartInfo() {
    const { cartTotal } = useCartContext();

    const delivery = cartTotal === 0 ? 0 : 3.5;
    const totalPlusDelivery = cartTotal === 0 ? 0 : cartTotal + delivery;

    return (
        <CartInfoContainer>
            <CartInfoRow>
                <span>
                    Total de itens
                </span>

                <span>
                    R$ {cartTotal.toFixed(2).replace('.', ',')}
                </span>
            </CartInfoRow>

            <CartInfoRow>
                <span>
                    Entrega
                </span>

                <span>
                    R$ {delivery.toFixed(2).replace('.', ',')}
                </span>
            </CartInfoRow>

            <CartRowTotal>
                <span>
                    Total
                </span>

                <span>
                    R$ {totalPlusDelivery.toFixed(2).replace('.', ',')}
                </span>
            </CartRowTotal>

            <PlaceOrder>
                CONFIRMAR PEDIDO
            </PlaceOrder>
        </CartInfoContainer>
    )
}