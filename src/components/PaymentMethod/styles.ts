import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
    max-width: 640px;

    background-color: ${props => props.theme["grey-200"]};
    border-radius: 6px;

    padding: 30px 20px;
    margin-top: 15px;
`;

export const PaymentMethodHeader = styled.div`
    display: flex;
    gap: 15px;

    svg {
        color: ${props => props.theme["purple-500"]};
    }

    .header-title {
        font-size: 1.6rem;
        color: ${props => props.theme["black-400"]};
    }

    .header-text {
        font-size: 1.3rem;
        color: ${props => props.theme["black-300"]};

        margin-top: 5px;
    }
`;

export const PaymentOptionsContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media only screen and (min-width: 810px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export type PaymentMethodsOptions = 'debit' | 'credit' | 'cash';

interface PaymentOptionProps {
    isSelected: boolean
}

export const PaymentOption = styled.button<PaymentOptionProps>`
    background-color: ${props => props.isSelected ?
        props.theme["purple-50"] :
        props.theme["grey-400"]
    };

    border: ${props => props.isSelected ?
        `2px solid ${props.theme["purple-700"]}` :
        '2px solid transparent'
    };

    border-radius: 6px;
    padding: 16px;

    display: flex;
    align-items: center;
    gap: 8px;

    width: 190px;

    & span:first-of-type {
        color: ${props => props.theme["purple-500"]};
        margin-top: 4px;
    }

    &:hover {
        background-color: ${props => props.theme["black-100"]};
        cursor: pointer;
    }
`;