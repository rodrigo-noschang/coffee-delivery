import {
    CurrencyDollar,
    CreditCard,
    Bank,
    Money
} from '@phosphor-icons/react';

import { PaymentMethodContainer, PaymentMethodHeader, PaymentOption, PaymentOptionsContainer } from "./styles";
import { useState } from 'react';

import { PaymentMethodsOptions } from './styles';

export function PaymentMethod() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodsOptions | null>(null);

    function handleSelectPaymentMethod(method: PaymentMethodsOptions) {
        setSelectedMethod(method);
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