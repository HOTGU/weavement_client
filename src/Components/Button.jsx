import React from "react";
import styled from "styled-components";

const Btn = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.accentColor};
    /* background-color: ${(props) => props.theme.subAccentColor}; */
    color: ${(props) => props.theme.accentColor};
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Button({ children, ...props }) {
    return <Btn {...props}>{children}</Btn>;
}

export default Button;
