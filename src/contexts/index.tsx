import { ReactNode } from "react";

import { CartContextProvider } from "./Cart";
import { CustomerInfoContextProvider } from "./CustomerInfo";

interface ProvidersProps {
    children: ReactNode
}

export function ContextsProviders({ children }: ProvidersProps) {
    return (
        <CartContextProvider>
            <CustomerInfoContextProvider>
                {children}
            </CustomerInfoContextProvider>
        </CartContextProvider>
    )
}