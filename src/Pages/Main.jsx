import React, { useState } from "react";
import styled from "styled-components";

import Modal from "../Components/Modal";
import Process from "../Components/Process";
import MainImg from "../images/main.jpg";

function Main() {
    const [show, setShow] = useState(true);

    return (
        <Container className="wide-container">
            <MainTop src={MainImg}></MainTop>
            <div className="default-container">
                <Process />
            </div>
            <Modal show={show} setShow={setShow}>
                <ModalItem>
                    <div>현재 홈페이지 개선 중입니다</div>
                    <div>이메일 또는 전화로 문의 부탁드립니다</div>
                    <div className="contact">contact@weavement.co.kr</div>
                    <div className="contact">010-2564-7181</div>
                    <span>불편을 드려 죄송합니다</span>
                </ModalItem>
            </Modal>
        </Container>
    );
}

const Container = styled.div``;

const MainTop = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: -${(props) => props.theme.navbarHeight};
    background: url(${(props) => props.src}) no-repeat center/cover;
`;
const ModalItem = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    /* font-weight: 700; */
    div {
        line-height: 28px;
        &:nth-child(2n) {
            margin-bottom: 15px;
        }
    }
    .contact {
        font-weight: 700;
        font-size: 22px;
    }
    span {
        font-size: 16px;
    }
`;
export default Main;
