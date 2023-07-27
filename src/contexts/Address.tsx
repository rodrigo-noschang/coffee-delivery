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

interface AddressContextType {
    address: Address,

    registerAddress: (data: Address) => void
}

const AddressContext = createContext<AddressContextType>({} as AddressContextType);

interface AddressContextProviderProps {
    children: ReactNode
}

export function AddressContextProvider({ children }: AddressContextProviderProps) {
    const existingAddress = localStorage.getItem('@coffee-delivery:address');

    const [address, setAddress] = useState<Address>(
        existingAddress ?
            JSON.parse(existingAddress) as Address :
            {} as Address
    );

    function registerAddress(data: Address) {
        setAddress(data);
        localStorage.setItem('@coffee-delivery:address', JSON.stringify(data));
    }

    return (
        <AddressContext.Provider value={{
            address,
            registerAddress
        }}>
            {children}
        </AddressContext.Provider>
    )
}

export const useAddressContext = () => useContext(AddressContext);