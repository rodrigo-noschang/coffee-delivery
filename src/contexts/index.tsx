import { ReactNode } from "react";

import { CartContextProvider } from "./Cart";
import { AddressContextProvider } from "./Address";

interface ProvidersProps {
    children: ReactNode
}

export function ContextsProviders({ children }: ProvidersProps) {
    return (
        <CartContextProvider>
            <AddressContextProvider>
                {children}
            </AddressContextProvider>
        </CartContextProvider>
    )
}