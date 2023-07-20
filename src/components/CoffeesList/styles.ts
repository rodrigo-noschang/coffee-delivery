import styled from "styled-components";

export const CoffeesListContainer = styled.div`
    padding: 0 20px;
    margin: 20px 0;

    h2 {
        font-size: 2.0rem;
    }

    @media only screen and (min-width: 720px){
        padding: 20px 80px;

        h2 {
            font-size: 2.8rem;
        }
    }
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    padding-bottom: 60px;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    @media only screen and (min-width: 1290px) {
        justify-content: space-evenly;
        padding-bottom: 0;
    }
`;