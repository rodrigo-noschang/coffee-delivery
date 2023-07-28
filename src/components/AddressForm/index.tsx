import { MapPinLine } from '@phosphor-icons/react';
import { useFormContext, FieldErrors } from 'react-hook-form';
import * as zod from 'zod';

import {
    AddressCity,
    AddressComplement,
    AddressFormContainer,
    AddressStreet,
    Form,
    FormContainer,
    FormHeader,
    InputContainer
} from "./styles";
import { useCustomerInfoContext } from '../../contexts/CustomerInfo';

export const addressFormSchema = zod.object({
    zip_code: zod.string().refine(value => {
        if (value !== '') {
            if (value.length !== 9) {
                return false;
            }
            return true;
        }

        return true;
    }, {
        message: 'CEP deve ser do formato xxxxx-xxx'
    }).optional(),
    street: zod.string().max(30, 'Máximo de 30 caractéres').nonempty('Informe o endereço'),
    number: zod.string().max(4, 'Máximo de 4 dígitos').nonempty('Informe o número'),
    complement: zod.string().max(50, 'Máximo de 50 caractéres').optional(),
    neighborhood: zod.string().max(15, 'Máximo de 15 caractéres').optional(),
    city: zod.string().nonempty('Informe a cidade'),
    state: zod.string()
        .min(2, 'Estado tem que conter ao menos 2 letras')
        .max(2, 'Estado tem que conter no máximo 2 letras')
        .toUpperCase()
        .nonempty('Informe o estado')
})

export type AddressFormType = zod.infer<typeof addressFormSchema>;

interface AddressFormProps {
    formErrors: FieldErrors<AddressFormType>
}

export function AddressForm({ formErrors }: AddressFormProps) {
    const { address } = useCustomerInfoContext();

    // A criação do formulário está em Order/index.tsx
    const { register, watch } = useFormContext();

    const formData = watch() as AddressFormType;
    const {
        zip_code,
        street,
        number,
        complement,
        neighborhood,
        city,
        state
    } = formData;

    return (
        <AddressFormContainer>

            <FormContainer>
                <FormHeader>
                    <div>
                        <MapPinLine size={24} />
                    </div>
                    <div>
                        <div className='form-header-title'>
                            Endereço de Entrega
                        </div>
                        <div className='form-header-text'>
                            Informe o endereço onde deseja receber seu pedido
                        </div>
                    </div>
                </FormHeader>

                <Form>
                    <AddressStreet>
                        <InputContainer isInputFilled={!!zip_code} isInputInvalid={!!formErrors.zip_code?.message}>
                            <input
                                placeholder='CEP'
                                {...register('zip_code')}
                                defaultValue={address.zip_code ?? ''}
                            />

                            {formErrors.zip_code &&
                                <span>
                                    {formErrors.zip_code.message}
                                </span>
                            }
                        </InputContainer>

                        <InputContainer isInputFilled={!!street} isInputInvalid={!!formErrors.street?.message}>
                            <input
                                placeholder='Rua'
                                {...register('street')}
                                defaultValue={address.street ?? ''}
                            />

                            {formErrors.street &&
                                <span>
                                    {formErrors.street.message}
                                </span>
                            }
                        </InputContainer>
                    </AddressStreet>

                    <AddressComplement>
                        <InputContainer isInputFilled={!!number} isInputInvalid={!!formErrors.number?.message}>
                            <input
                                placeholder='Número'
                                {...register('number')}
                                defaultValue={address.number ?? ''}
                            />

                            {formErrors.number &&
                                <span>
                                    {formErrors.number.message}
                                </span>
                            }
                        </InputContainer>

                        <InputContainer isInputFilled={!!complement} isInputInvalid={!!formErrors.complement?.message}>
                            <input
                                placeholder='Complemento'
                                {...register('complement')}
                                defaultValue={address.complement ?? ''}
                            />

                            {formErrors.complement &&
                                <span>
                                    {formErrors.complement.message}
                                </span>
                            }
                        </InputContainer>
                    </AddressComplement>

                    <AddressCity>
                        <InputContainer isInputFilled={!!neighborhood} isInputInvalid={!!formErrors.neighborhood?.message}>
                            <input
                                placeholder='Bairro'
                                {...register('neighborhood')}
                                defaultValue={address.neighborhood ?? ''}
                            />

                            {formErrors.neighborhood &&
                                <span>
                                    {formErrors.neighborhood.message}
                                </span>
                            }
                        </InputContainer>

                        <div className='city-state-container'>
                            <InputContainer isInputFilled={!!city} isInputInvalid={!!formErrors.city?.message}>
                                <input
                                    placeholder='Cidade'
                                    {...register('city')}
                                    defaultValue={address.city ?? ''}
                                />

                                {formErrors.city &&
                                    <span>
                                        {formErrors.city.message}
                                    </span>
                                }
                            </InputContainer>

                            <InputContainer isInputFilled={!!state} isInputInvalid={!!formErrors.state?.message}>
                                <input
                                    placeholder='UF'
                                    {...register('state')}
                                    defaultValue={address.state ?? ''}
                                />

                                {formErrors.state &&
                                    <span>
                                        {formErrors.state.message}
                                    </span>
                                }
                            </InputContainer>
                        </div>
                    </AddressCity>
                </Form>
            </FormContainer>
        </AddressFormContainer>
    )
}