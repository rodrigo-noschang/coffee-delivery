import { ContentWidthLimiter } from "../ContentWidthLimiter"
import { CoffeesListContainer, ListContainer } from "./styles"

import { Coffee } from "../Coffee"
import { database_coffees } from "../../utils/database"

export function CoffeesList() {

    return (
        <ContentWidthLimiter>
            <CoffeesListContainer>
                <h2> Nossos cafés </h2>

                <ListContainer>
                    {
                        database_coffees.map(coffee => {
                            return (
                                <Coffee
                                    key={coffee.id}
                                    coffeeData={coffee}
                                />
                            )
                        })
                    }
                </ListContainer>
            </CoffeesListContainer>

        </ContentWidthLimiter>
    )
}