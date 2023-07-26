import { CartListContainer, EmptyCartMessage } from "./styles";

import { CartCoffee } from "../CartCoffee";

import { useCartContext } from "../../contexts/Cart";

export function CartList() {
    const { coffeeList } = useCartContext();

    return (
        <CartListContainer>
            {
                coffeeList.length === 0 ?
                    <EmptyCartMessage>
                        Seu carrinho está vazio.
                    </EmptyCartMessage>
                    :
                    coffeeList.map(coffee => {
                        return <CartCoffee key={coffee.id} coffee={coffee} />
                    })
            }
        </CartListContainer>
    )
}