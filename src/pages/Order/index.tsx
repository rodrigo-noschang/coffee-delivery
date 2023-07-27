import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";

import { useAddressContext } from "../../contexts/Address";

import { CartInfo } from "../../components/CartInfo";
import { CartList } from "../../components/CartList";
import { AddressForm } from "../../components/AddressForm";
import { PaymentMethod } from "../../components/PaymentMethod";
import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";

import { addressFormSchema, AddressFormType } from "../../components/AddressForm";

import {
    OrderContainer,
    OrderInfoContainer,
    OrderLeftSideContainer,
    OrderRightSideContainer
} from "./styles";

type PaymentMethodsOptions = "debit" | "credit" | "cash"

export function Order() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodsOptions | null>(null);

    function selectPaymentMethod(method: PaymentMethodsOptions) {
        setSelectedMethod(method);
    }

    const { address } = useAddressContext();

    const addressForm = useForm<AddressFormType>({
        resolver: zodResolver(addressFormSchema),
        defaultValues: address
    });

    const { handleSubmit, formState: { errors } } = addressForm;

    const { registerAddress } = useAddressContext();

    function handleSubmitForm(data: AddressFormType) {
        registerAddress(data);
    }

    return (
        <ContentWidthLimiter>
            <OrderContainer onSubmit={handleSubmit(handleSubmitForm)}>
                <OrderLeftSideContainer>
                    <h2>
                        Complete seu pedido
                    </h2>

                    <FormProvider {...addressForm}>
                        <AddressForm formErrors={errors} />
                    </FormProvider>
                    <PaymentMethod
                        selectedMethod={selectedMethod}
                        selectPaymentMethod={selectPaymentMethod}
                    />
                </OrderLeftSideContainer>

                <OrderRightSideContainer>
                    <h2>
                        Cafés selecionados
                    </h2>

                    <OrderInfoContainer>
                        <CartList />
                        <CartInfo />
                    </OrderInfoContainer>

                </OrderRightSideContainer>
            </OrderContainer>
        </ContentWidthLimiter>
    )
}