import styled from "styled-components";

import backgroundImage from '../../assets/background.svg';

export const HomeTitleContainer = styled.div`
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;

    padding: 0 20px;
    margin-top: 15px;
`;

export const LeftSideContainer = styled.div`
    h1 {
        font-size: 3rem;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        font-size: 1.4rem;

        span {
            font-family: 'Baloo 2', cursive;
            font-weight: bold;
            font-size: 1.6rem;
        }
    }
`;

export const AdvantagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 20px;

    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
            font-size: 1.4rem;
        }
    }
`;