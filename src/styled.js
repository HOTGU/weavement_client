import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input,button {
        outline: none;
        border: none;
    }
    body{
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textColor};
    }
    .wide-container {
        width:100%;
    }
    .default-container {
        width:100%;
        max-width: 1400px;
        margin: 0 auto;
    }
`;

export const myTheme = {
    navbarHeight: "80px",
    bgColor: "white",
    textColor: "black",
    accentColor: "red",
};
