import React from "react";
import styled from "styled-components";

function Input(props) {
    return <SInput {...props} />;
}

const SInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.borderColor};
`;

export default Input;
