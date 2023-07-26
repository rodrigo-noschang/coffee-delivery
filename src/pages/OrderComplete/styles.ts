import styled from "styled-components";

export const OrderCompleteContainer = styled.div`
    padding: 0 20px 40px;
    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media only screen and (min-width: 720px){
        padding: 20px 80px;
    }

    @media only screen and (min-width: 1050px) {
        justify-content: space-between;
        margin-top: 60px;
    }
`;

export const OrderCompleteLeftSideContainer = styled.div`
    width: 90vw;
    max-width: 470px;

    h2 {
        color: ${props => props.theme["yellow-700"]};
        font-size: 2.2rem;
    }

    h2 + div {
        font-size: 1.3rem;
        margin-top: 5px;
    }

    @media only screen and (min-width: 420px) {
        h2 {
            font-size: 2.8rem;
        }

        h2 + div {
            font-size: 1.5rem;
            margin-top: 5px;
        }
    }
`;

export const BorderEffect = styled.div`
    padding: 2px;
    margin-top: 20px;
    border-radius: 6px 36px 6px 36px;

    background-image: linear-gradient(
        45deg, 
        ${props => props.theme["yellow-500"]},
        ${props => props.theme["purple-500"]}
    );
`;

export const AddressInfoContainer = styled.div`
    border-radius: 3px 33px 3px 33px;
    background-color: ${props => props.theme["grey-100"]};
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const CompleteOrderInfo = styled.div`
    display: flex;
    gap: 10px;

    color: ${props => props.theme["black-300"]};

    .highlight {
        font-weight: bold;
    }

    .icon-container {
        color: ${props => props.theme.white};

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 7px;
        border-radius: 100%;

        align-self: center;
    }

    span + div {
        display:flex;
        flex-direction: column;
        gap: 2px;
    }

    @media only screen and (min-width: 420px) {
        font-size: 1.4rem;
    }
`;

export const CompleteOrderLocationInfo = styled(CompleteOrderInfo)`
    .icon-container {
        background-color: ${props => props.theme["purple-500"]};
    }
`;

export const CompleteOrderDeliveryTimeInfo = styled(CompleteOrderInfo)`
    .icon-container {
        background-color: ${props => props.theme["yellow-500"]};
    }
`;

export const CompleteOrderPaymentInfo = styled(CompleteOrderInfo)`
    .icon-container {
        background-color: ${props => props.theme["yellow-700"]};
    }
`;

export const OrderCompleteRightSideContainer = styled.div`
    display: none;

    @media only screen and (min-width: 1050px) {
        display: block;
    }
`;