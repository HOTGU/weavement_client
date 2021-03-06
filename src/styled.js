import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { device } from "./device";

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
        font-family: "Pretendard";
        font-size: 16px;
        padding-top: 80px;
    }
    .wide-container {
        width:100%;
    }
    .default-container {
        width:100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 30px;
        @media ${device.laptop} {
            padding: 0 10px;
        }
    }
    .btn {
        padding: 10px 14px;
        font-size: 18px;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        border: 1px solid #dcdde1;
    }
`;

export const myTheme = {
    navbarHeight: "80px",
    bgColor: "white",
    textColor: "black",
    accentColor: "rgb(166,25,46)",
    subAccentColor: "rgb(192,156,131)",
    borderColor: "#dcdde1",
    hoverColor: "#bdc3c7",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
    grayColor: "#95a5a6",
    blackColor: "black",
    darkGrayColor: "#3e3a39",
};
