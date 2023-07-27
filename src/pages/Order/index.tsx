import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { addressFormSchema, AddressFormType } from "../../components/AddressForm";

import { CartInfo } from "../../components/CartInfo";
import { CartList } from "../../components/CartList";
import { AddressForm } from "../../components/AddressForm";
import { PaymentMethod } from "../../components/PaymentMethod";
import { ContentWidthLimiter } from "../../components/ContentWidthLimiter";

import {
    OrderContainer,
    OrderInfoContainer,
    OrderLeftSideContainer,
    OrderRightSideContainer
} from "./styles";


export function Order() {
    const addressForm = useForm<AddressFormType>({
        resolver: zodResolver(addressFormSchema)
    });

    const { handleSubmit, formState: { errors } } = addressForm;

    function handleSubmitForm(data: AddressFormType) {
        console.log('Dados - >', data);


    }

    console.log('Erros -> ', errors);

    return (
        <ContentWidthLimiter>
            <OrderContainer onSubmit={handleSubmit(handleSubmitForm)}>
                <OrderLeftSideContainer>
                    <h2>
                        Complete seu pedido
                    </h2>

                    <FormProvider {...addressForm}>
                        <AddressForm />
                    </FormProvider>
                    <PaymentMethod />
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