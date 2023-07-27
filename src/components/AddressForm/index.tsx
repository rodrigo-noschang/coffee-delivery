import { MapPinLine } from '@phosphor-icons/react';
// import { zodResolver } from '@hookform/resolvers/zod';
import { useFormContext } from 'react-hook-form';
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

export const addressFormSchema = zod.object({
    zip_code: zod.string().refine(value => {
        if (value !== '') {
            if (value.length !== 9) {
                return false;
            }
        } else {
            return true;
        }
    }, {
        message: 'CEP deve ser do formato xxxxx-xxx'
    }),
    street: zod.string().max(30).nonempty('Informe o endereço'),
    number: zod.string().max(4).nonempty('Informe o número'),
    complement: zod.string().max(20).optional(),
    neighborhood: zod.string().max(15).optional(),
    city: zod.string().nonempty('Informe a cidade'),
    state: zod.string()
        .min(2, 'Estado tem que conter ao menos 2 letras')
        .max(2, 'Estado tem que conter no máximo 2 letras')
        .toUpperCase()
        .nonempty('Informe o estado')
})

export type AddressFormType = zod.infer<typeof addressFormSchema>;

export function AddressForm() {

    // A criação do formulário está em Order/index.tsx
    const { register } = useFormContext();

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
                        <InputContainer>
                            <input
                                placeholder='CEP'
                                {...register('zip_code')}

                            />
                        </InputContainer>

                        <InputContainer>
                            <input
                                placeholder='Rua'
                                {...register('street')}
                            />
                        </InputContainer>
                    </AddressStreet>

                    <AddressComplement>
                        <InputContainer>
                            <input
                                placeholder='Número'
                                {...register('number')}
                            />
                        </InputContainer>

                        <InputContainer>
                            <input
                                placeholder='Complemento'
                                {...register('complement')}
                            />
                        </InputContainer>
                    </AddressComplement>

                    <AddressCity>
                        <InputContainer>
                            <input
                                placeholder='Bairro'
                                {...register('neighborhood')}
                            />
                        </InputContainer>

                        <div className='city-state-container'>
                            <InputContainer>
                                <input
                                    placeholder='Cidade'
                                    {...register('city')}
                                />
                            </InputContainer>

                            <InputContainer>
                                <input
                                    placeholder='UF'
                                    {...register('state')}
                                />
                            </InputContainer>
                        </div>
                    </AddressCity>
                </Form>
            </FormContainer>
        </AddressFormContainer>
    )
}