import {
    CurrencyDollar,
    CreditCard,
    Bank,
    Money
} from '@phosphor-icons/react';

import {
    PaymentMethodContainer,
    PaymentMethodHeader,
    PaymentMethodsOptions,
    PaymentOption,
    PaymentOptionsContainer
} from "./styles";

interface PaymentMethodProps {
    selectedMethod: PaymentMethodsOptions | null
    selectPaymentMethod: (method: PaymentMethodsOptions) => void
}

export function PaymentMethod({ selectedMethod, selectPaymentMethod }: PaymentMethodProps) {

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
                <PaymentOption
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

                <PaymentOption
                    isSelected={selectedMethod === 'debit'}
                    onClick={() => handleSelectPaymentMethod('debit')}
                >
                    <span>
                        <Bank size={18} />
                    </span>
                    <span>
                        CARTÃO DE CRÉDITO
                    </span>
                </PaymentOption>

                <PaymentOption
                    isSelected={selectedMethod === 'cash'}
                    onClick={() => handleSelectPaymentMethod('cash')}
                >
                    <span>
                        <Money size={18} />
                    </span>
                    <span>
                        CARTÃO DE CRÉDITO
                    </span>
                </PaymentOption>
            </PaymentOptionsContainer>
        </PaymentMethodContainer>
    )
}