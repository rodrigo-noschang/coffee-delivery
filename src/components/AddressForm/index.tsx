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
import { useAddressContext } from '../../contexts/Address';

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
    const { address } = useAddressContext();

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

    console.log(city);

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
                        <InputContainer isInputFilled={!!zip_code}>
                            <input
                                placeholder='CEP'
                                {...register('zip_code')}
                                defaultValue={address.zip_code ?? ''}
                            />
                        </InputContainer>

                        <InputContainer isInputFilled={!!street}>
                            <input
                                placeholder='Rua'
                                {...register('street')}
                                defaultValue={address.street ?? ''}
                            />
                        </InputContainer>
                    </AddressStreet>

                    <AddressComplement>
                        <InputContainer isInputFilled={!!number}>
                            <input
                                placeholder='Número'
                                {...register('number')}
                                defaultValue={address.number ?? ''}
                            />
                        </InputContainer>

                        <InputContainer isInputFilled={!!complement}>
                            <input
                                placeholder='Complemento'
                                {...register('complement')}
                                defaultValue={address.complement ?? ''}
                            />
                        </InputContainer>
                    </AddressComplement>

                    <AddressCity>
                        <InputContainer isInputFilled={!!neighborhood}>
                            <input
                                placeholder='Bairro'
                                {...register('neighborhood')}
                                defaultValue={address.neighborhood ?? ''}
                            />
                        </InputContainer>

                        <div className='city-state-container'>
                            <InputContainer isInputFilled={!!city}>
                                <input
                                    placeholder='Cidade'
                                    {...register('city')}
                                    defaultValue={address.city ?? ''}
                                />
                            </InputContainer>

                            <InputContainer isInputFilled={!!state}>
                                <input
                                    placeholder='UF'
                                    {...register('state')}
                                    defaultValue={address.state ?? ''}
                                />
                            </InputContainer>
                        </div>
                    </AddressCity>
                </Form>
            </FormContainer>
        </AddressFormContainer>
    )
}