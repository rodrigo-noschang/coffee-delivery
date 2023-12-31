import styled from "styled-components";

export const CartCoffeeContainer = styled.li`
    display: flex;
    border-bottom: 2px solid ${props => props.theme['grey-400']};
    max-width: 370px;
    padding-bottom: 24px;
    padding-top: 10px;
`;

export const CartCoffeeImageContainer = styled.div`
    img {
        width: 50px;
    }

    @media only screen and (min-width: 370px) {
        img {
            width: 64px;
        }
    }
`;

export const CartCoffeeInfoContainer = styled.div`
    margin-left: 15px;
    flex: 1;

    .coffee-name {
        font-size: 1.5rem;
        margin-bottom: 5px;
    }

    @media only screen and (min-width: 370px) {
        .coffee-name {
            font-size: 1.7rem;
        }
    }
`;

export const CartCoffeeOptionsContainer = styled.div`
    display: flex;
    gap: 20px;

    @media only screen and (min-width: 370px) {
        justify-content: flex-start;
        gap: 10px;
    }
`;

export const CartCoffeeAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;

    background-color: ${props => props.theme["grey-400"]};
    border-radius: 6px;
    padding: 3px;
    
    font-size: 1.4rem;

    button {
        border: none;
        background-color: ${props => props.theme["grey-400"]};
    }

    button:hover {
        cursor: pointer;
    }

    button:hover svg {
        color: ${props => props.theme["purple-700"]};
    }

    button:active svg {
        color: ${props => props.theme["purple-500"]};
    }

    svg {
        color: ${props => props.theme["purple-500"]};
    }
`;

export const CartCoffeeRemoveContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    background-color: ${props => props.theme["grey-400"]};
    border-radius: 6px;
    border: none;
    padding: 5px 10px;
    
    span:first-of-type {
        margin-top: 2px;
        color: ${props => props.theme["purple-500"]};
    }

    span + span {
        display: none;
        font-size: 1.3rem;
    }

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme["black-100"]};
    }

    &:active {
        background-color: ${props => props.theme["grey-400"]};
    }

    @media only screen and (min-width: 370px) {
        span + span {
            display: inline;
        }
    }
`;

export const CartCoffeePrice = styled.div`
    font-size: 1.5rem;
    font-weight: bold;

    @media only screen and (min-width: 370px) {
        font-size: 1.7rem;
    }
`; 