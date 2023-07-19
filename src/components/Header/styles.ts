import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const LocationInfoContainer = styled.div`
    display: flex;
    align-items: center;

    background-color: ${props => props.theme['grey-400']};
    padding: 5px 10px;
    border-radius: 8px;

    font-size: 1.4rem;

    color: ${props => props.theme['purple-500']};

    span {
        margin-left: 5px;
    }
`;

export const ShoppingCartContainer = styled.div`
    background-color: ${props => props.theme['yellow-50']};
    color: ${props => props.theme['yellow-700']};

    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    
    border-radius: 4px;
    padding: 4px 8px;

    margin: 10px auto 0;

    @media only screen and (min-width: 600px) {
        margin: 0 0 0 10px; // add margin left
    }
`;