import { MapPinLine } from '@phosphor-icons/react';

import {
    AddressCity,
    AddressComplement,
    AddressFormContainer,
    AddressStreet,
    Form,
    FormContainer,
    FormHeader
} from "./styles";

export function AddressForm() {
    return (
        <AddressFormContainer>
            <h2>
                Complete seu pedido
            </h2>

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
                        <input
                            placeholder='CEP'
                        />
                        <input
                            placeholder='Rua'
                        />
                    </AddressStreet>

                    <AddressComplement>
                        <input
                            placeholder='Número'
                        />

                        <input
                            placeholder='Complemento'
                        />
                    </AddressComplement>

                    <AddressCity>
                        <input
                            placeholder='Bairro'
                        />

                        <div>
                            <input
                                placeholder='Cidade'
                            />

                            <input
                                placeholder='UF'
                            />
                        </div>
                    </AddressCity>
                </Form>
            </FormContainer>
        </AddressFormContainer>
    )
}