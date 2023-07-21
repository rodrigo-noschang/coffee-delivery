import styled from "styled-components";

export const AddressFormContainer = styled.div`
    max-width: 640px;

    h2 {
        font-size: 1.8rem;
    }
`;

export const FormContainer = styled.div`
    background-color: ${props => props.theme["grey-200"]};
    border-radius: 6px;

    padding: 30px 20px;
    margin-top: 15px;
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

export const AddressStreet = styled.div`
    & input:first-of-type {
        width: 100%;
        max-width: 200px;
    }

    input + input {
        width: 100%;
    }
`;

export const AddressComplement = styled.div`
    display: flex;
    gap: 15px;

    & input:first-of-type {
        width: 80px;
    }

    input + input {
        width: calc(100% - 80px);
    }
`;

export const AddressCity = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 15px;

    & input:first-of-type {
        width: 100%;
        max-width: 200px;
    }

    div {
        display: flex;
        justify-content: space-between;
        column-gap: 15px;
        flex: 1;

        min-width: 240px;
    }

    & div input[placeholder='Cidade'] {
        flex: 1;
        max-width: 275px;
    }

    & div input:last-of-type {
        width: 60px;
    }
`;