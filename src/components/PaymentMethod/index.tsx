import {
    CurrencyDollar,
    CreditCard,
    Bank,
    Money
} from '@phosphor-icons/react';

import { useCustomerInfoContext } from '../../contexts/CustomerInfo';

import {
    PaymentMethodContainer,
    PaymentMethodHeader,
    PaymentMethodsOptions,
    PaymentOption,
    PaymentOptionsContainer
} from "./styles";

export function PaymentMethod() {
    const { selectedMethod, selectPaymentMethod } = useCustomerInfoContext();

    function handleSelectPaymentMethod(method: PaymentMethodsOptions) {
        selectPaymentMethod(method);
    }

    return (
        <PaymentMethodContainer>
            <PaymentMethodHeader>
                <div>
                    <CurrencyDollar size={24} />
                </div>

                <div>
                    <div className='header-title'>
                        Pagamento
                    </div>
                    <div className='header-text'>
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </div>
                </div>
            </PaymentMethodHeader>

            <PaymentOptionsContainer>
                <PaymentOption type='button'
                    isSelected={selectedMethod === 'credit'}
                    onClick={() => handleSelectPaymentMethod('credit')}
                >
                    <span>
                        <CreditCard size={18} />
                    </span>
                    <span>
                        CARTÃO DE CRÉDITO
                    </span>
                </PaymentOption>

                <PaymentOption type='button'
                    isSelected={selectedMethod === 'debit'}
                    onClick={() => handleSelectPaymentMethod('debit')}
                >
                    <span>
                        <Bank size={18} />
                    </span>
                    <span>
                        CARTÃO DE DÉBITO
                    </span>
                </PaymentOption>

                <PaymentOption type='button'
                    isSelected={selectedMethod === 'cash'}
                    onClick={() => handleSelectPaymentMethod('cash')}
                >
                    <span>
                        <Money size={18} />
                    </span>
                    <span>
                        DINHEIRO
                    </span>
                </PaymentOption>
            </PaymentOptionsContainer>
        </PaymentMethodContainer>
    )
}