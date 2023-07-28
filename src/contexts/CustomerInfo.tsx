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
type PaymentMethodText = 'Cartão de Débito' | 'Cartão de Crédito' | 'Dinheiro'

interface CustomerInfoContextType {
    address: Address,
    paymentMethod: PaymentMethodText | null,
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
    const storedMethod = localStorage.getItem('@coffee-delivery:selectedMethod');

    const [address, setAddress] = useState<Address>(
        storedAddress ? JSON.parse(storedAddress) as Address : {} as Address
    );
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodsOptions | null>(
        storedMethod ? JSON.parse(storedMethod) as PaymentMethodsOptions : null
    );

    const paymentMethod = selectedMethod === 'debit' ? 'Cartão de Débito' :
        selectedMethod === 'credit' ? 'Cartão de Crédito' :
            selectedMethod === 'cash' ? 'Dinheiro' : null;

    function selectPaymentMethod(method: PaymentMethodsOptions) {
        setSelectedMethod(method);
        localStorage.setItem('@coffee-delivery:selectedMethod', JSON.stringify(method));
    }

    function registerAddress(data: Address) {
        setAddress(data);
        localStorage.setItem('@coffee-delivery:address', JSON.stringify(data));
    }

    return (
        <CustomerInfoContext.Provider value={{
            address,
            paymentMethod,
            selectedMethod,
            registerAddress,
            selectPaymentMethod
        }}>
            {children}
        </CustomerInfoContext.Provider>
    )
}

export const useCustomerInfoContext = () => useContext(CustomerInfoContext);