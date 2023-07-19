import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 1rem = 10px
    }

    body, input, textarea, button {
        background-color: ${props => props.theme["black-100"]};
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3 {
        font-family: 'Baloo 2', cursive;
    }
`;