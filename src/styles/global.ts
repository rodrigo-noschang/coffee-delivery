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
        background-color: ${props => props.theme["grey-100"]};
        font-family: 'Roboto', sans-serif;
    }

    input {
        outline: none;
    }
    
    h1, h2, h3 {
        font-family: 'Baloo 2', cursive;
    }

    li {
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;