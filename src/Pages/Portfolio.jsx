import React, { useState } from "react";
import styled from "styled-components";
import DocumentMeta from "react-document-meta";

const meta = {
    title: "포트폴리오",
    meta: {
        name: {
            keywords: "조형물,조형물사업",
        },
    },
};

function Portfolio() {
    const [inputValue, setInputValue] = useState();

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    return <Container>{/* <DocumentMeta {...meta} /> */}</Container>;
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: ${(props) => props.theme.navbarHeight};
    & input {
        border: 1px solid red;
    }
`;

export default Portfolio;
