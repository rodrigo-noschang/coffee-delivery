import styled from "styled-components";

export const AddressFormContainer = styled.div`
    max-width: 640px;
`;

export const FormContainer = styled.div`
    background-color: ${props => props.theme["grey-200"]};
    border-radius: 6px;

    padding: 30px 20px;
    margin-top: 20px;
`;

export const FormHeader = styled.div`
    display: flex;
    gap: 15px;

    svg {
        color: ${props => props.theme["yellow-700"]};
    }

    .form-header-title {
        font-size: 1.6rem;
        color: ${props => props.theme["black-400"]};
    }

    .form-header-text {
        font-size: 1.3rem;
        color: ${props => props.theme["black-300"]};

        margin-top: 5px;
    }
`;

export const Form = styled.form`
    input {
        width: 170px;
        background-color: ${props => props.theme["grey-400"]};

        border: none;
        border-radius: 4px;

        padding: 10px;
        margin-top: 15px;

    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

`;

export const AddressStreet = styled.div`
    input[placeholder='CEP'] {
        width: 100%;
        max-width: 200px;
    }

    input[placeholder='Rua'] {
        width: 100%;
    }
`;

export const AddressComplement = styled.div`
    display: flex;
    gap: 15px;

    input[placeholder='Número'] {
        width: 80px;
    }

    div + div {
        width: calc(100% - 80px);
    }
    
    input[placeholder='Complemento'] {
        width: 100%
        /* width: calc(100% - 80px); */
    }
`;

export const AddressCity = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 15px;

    input[placeholder='Bairro'] {
        width: 100%;
        max-width: 200px;
    }

    .city-state-container {
        display: flex;
        justify-content: space-between;
        column-gap: 15px;
        flex: 1;

        min-width: 240px;
    }

    .city-state-container > div:first-of-type {
        flex: 1;
    }

    input[placeholder='Cidade'] {
        max-width: 275px;
        width: 100%;
    }

    input[placeholder='UF'] {
        width: 60px;
    }
`;