import styled from "styled-components";

export const OrderContainer = styled.div`
    padding: 0 20px 40px;
    margin-top: 20px;

    @media only screen and (min-width: 720px){
        padding: 20px 80px;
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
    }
`;