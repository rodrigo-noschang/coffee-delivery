import styled from "styled-components";

import backgroundImage from '../../assets/background.svg';

export const BackgroundExtensor = styled.div`
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
`;

export const HomeTitleContainer = styled.div`
    padding: 0 20px;
    margin-top: 15px;

    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 720px){
        padding: 20px 80px;
    }
`;

export const LeftSideContainer = styled.div`
    h1 {
        font-size: 3rem;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        font-size: 1.4rem;
        margin-top: 20px;

        span {
            font-family: 'Baloo 2', cursive;
            font-weight: bold;
            font-size: 1.6rem;
        }
    }

    @media only screen and (min-width: 780px) {
        max-width: 780px;

        h1 {
            font-size: 4.8rem;
        }

        h2 {
            font-size: 2.0rem;
        }
    }
`;

export const AdvantagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    gap: 20px;
    margin-top: 20px;
    
    @media only screen and (min-width: 620px) {
        max-height: 110px;
    }
`;

const advantagesBackgroundColors = {
    orange: 'yellow-700',
    yellow: 'yellow-500',
    grey: 'black-300',
    purple: 'purple-500',
} as const;

interface AdvantageProps {
    bgColor: keyof typeof advantagesBackgroundColors
}

export const Advantage = styled.div<AdvantageProps>`
    display: flex;
    align-items: center;

    span:first-child {
        border-radius: 50%;
        width: 40px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => props.theme[advantagesBackgroundColors[props.bgColor]]};
        color: ${props => props.theme.white};
    }

    span + span {
        font-size: 1.5rem;
        margin-left: 10px;
    }
`;

export const RightSideContainer = styled.div`
    display: none;

    @media only screen and (min-width: 1260px) {
        display: block;
    }
`;