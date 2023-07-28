import { ReactNode, createContext, useContext, useState } from "react";

interface Address {
    number: string;
    street: string;
    city: string;
    state: string;
    zip_code?: string | undefined;
    complement?: string | undefined;
    neighborhood?: string | undefined;
}

type PaymentMethodsOptions = "debit" | "credit" | "cash"

interface CustomerInfoContextType {
    address: Address,
    selectedMethod: PaymentMethodsOptions | null,

    registerAddress: (data: Address) => void
    selectPaymentMethod: (method: PaymentMethodsOptions) => void
}

const CustomerInfoContext = createContext<CustomerInfoContextType>({} as CustomerInfoContextType);

interface CustomerInfoContextProviderProps {
    children: ReactNode
}

export function CustomerInfoContextProvider({ children }: CustomerInfoContextProviderProps) {
    const storedAddress = localStorage.getItem('@coffee-delivery:address');

    const [address, setAddress] = useState<Address>(
        storedAddress ?
            JSON.parse(storedAddress) as Address :
            {} as Address
    );
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodsOptions | null>(null);

    console.log(selectedMethod);

    function selectPaymentMethod(method: PaymentMethodsOptions) {
        setSelectedMethod(method);
    }

    function registerAddress(data: Address) {
        setAddress(data);
        localStorage.setItem('@coffee-delivery:address', JSON.stringify(data));
    }

    return (
        <CustomerInfoContext.Provider value={{
            address,
            selectedMethod,
            registerAddress,
            selectPaymentMethod
        }}>
            {children}
        </CustomerInfoContext.Provider>
    )
}

export const useCustomerInfoContext = () => useContext(CustomerInfoContext);