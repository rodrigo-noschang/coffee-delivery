import styled from "styled-components";

export const OrderContainer = styled.div`
    padding: 0 20px 40px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 720px){
        padding: 20px 80px;
    }

    @media only screen and (min-width: 1250px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const OrderLeftSideContainer = styled.div`
    h2 {
        font-size: 1.8rem;
    }
`;

export const OrderRightSideContainer = styled.div`
    margin-top: 20px;

    h2 {
        font-size: 1.8rem;
    }

    @media only screen and (min-width: 1250px){
        margin-top: 0;
    }
`;

export const OrderInfoContainer = styled.div`
    margin-top: 20px;
    max-width: 450px;
    
    @media only screen and (min-width: 420px) {
        background-color: ${props => props.theme["grey-200"]};
        padding: 20px 10px;
        border-radius: 6px;
    }

    @media only screen and (min-width: 500px) {
        background-color: ${props => props.theme["grey-200"]};
        padding: 20px;
        border-radius: 6px 44px 6px 44px;
        padding: 44px 48px;
    }
`;