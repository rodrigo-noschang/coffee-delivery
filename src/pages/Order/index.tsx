import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { useCustomerInfoContext } from "../../contexts/CustomerInfo";

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

export function Order() {
    const { address, registerAddress } = useCustomerInfoContext();
    const navigate = useNavigate();

    const addressForm = useForm<AddressFormType>({
        resolver: zodResolver(addressFormSchema),
        defaultValues: address
    });

    const { handleSubmit, formState: { errors } } = addressForm;

    function handlePlaceOrder(data: AddressFormType) {
        registerAddress(data);

        navigate('/complete');
    }

    return (
        <ContentWidthLimiter>
            <OrderContainer onSubmit={handleSubmit(handlePlaceOrder)}>
                <OrderLeftSideContainer>
                    <h2>
                        Complete seu pedido
                    </h2>

                    <FormProvider {...addressForm}>
                        <AddressForm formErrors={errors} />
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