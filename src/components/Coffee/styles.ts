import styled from "styled-components";

export const CoffeeContainer = styled.li`
    border-radius: 6px 36px 6px 36px;

    width: 90vw;
    max-width: 260px;
    padding: 0 20px 20px 20px;
    margin-top: 30px;

    background-color: ${props => props.theme["grey-200"]};
    text-align: center;

    img {
        margin-top: -20px;
    }

    h3 {
        font-size: 2.0rem;
        margin-top: 10px;
    }

    p {
        font-size: 1.3rem;
        margin-top: 5px;
    }
`;

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    max-width: 90%;
    margin: 0 auto;

    span {
        background-color: ${props => props.theme["yellow-50"]};
        color: ${props => props.theme["yellow-700"]};

        padding: 4px 8px;
        border-radius: 20px;
        margin-top: 10px;

        text-transform: uppercase;
        font-size: 1.0rem;
        font-weight: bold;
    }
`;

export const PurchaseInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

export const PriceInfo = styled.div`
    flex: 1;
    text-align: start;

    span:first-of-type {
        font-size: 1.2rem;
    }

    span + span {
        font-size: 2.0rem;
        font-weight: bold;
        font-family: 'Baloo 2', cursive;
    }
`;

export const AmountContainer = styled.div`
    background-color: ${props => props.theme["grey-400"]};
    font-size: 1.6rem;
    padding: 8px;
    border-radius: 8px;
    
    button {
        border: 0;
        outline: 0;
        background-color: ${props => props.theme["grey-400"]};
        color: ${props => props.theme["purple-700"]};
    }

    span {
        margin: 0 5px;
    }
`;

export const AddToKartContainer = styled.div`
    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme.white};
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 6px;
    margin-left: 12px;
`;