import styled from "styled-components";

export const CartListContainer = styled.ul``;

export const EmptyCartMessage = styled.div`
    font-size: 1.6rem;
    color: ${props => props.theme["black-200"]};
    text-align: center;

    padding-bottom: 20px;

    border-bottom: 2px solid ${props => props.theme["grey-400"]};
`;