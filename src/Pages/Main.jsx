import React from "react";
import styled from "styled-components";
import MainImg from "../images/main.jpg";

function Main() {
    return (
        <Container className="wide-container">
            <MainTop src={MainImg}></MainTop>
            <MainMiddle>heelo</MainMiddle>
        </Container>
    );
}

const Container = styled.div``;

const MainTop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: orange;
    color: red;
    background: url(${(props) => props.src}) no-repeat center/cover;
`;
const MainMiddle = styled.div`
    width: 100%;
    height: 100vh;
`;

export default Main;
