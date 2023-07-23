import styled from "styled-components";

export const CartInfoContainer = styled.div`
    margin-top: 30px;
    
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CartInfoRow = styled(InfoRow)`
    span {
        color: ${props => props.theme["black-300"]};
    }

    & span:first-of-type {
        font-size: 1.4rem;
    }

    span + span {
        font-size: 1.6rem;
    }
`;

export const CartRowTotal = styled(InfoRow)`
    span {
        font-size: 2.0rem;
        font-weight: bold;
        color: ${props => props.theme["black-400"]};
    }
`;

export const PlaceOrder = styled.button`
    margin-top: 15px;
    padding: 12px 0; 
    border-radius: 6px;
    border: none;
    
    background-color: ${props => props.theme["yellow-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    font-size: 1.4rem;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme["yellow-700"]};
    }
    
    &:active {
        background-color: ${props => props.theme["yellow-500"]};
    }
`;