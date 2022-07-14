import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Modal({ children, show, setShow }) {
    return (
        <Wrapper show={show}>
            <ModalContainer show={show}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setShow(false)} />
                {children}
            </ModalContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: ${(props) => (props.show ? "rgba(0,0,0,0.6)" : "")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    transition: visibility ${(props) => (props.show ? "0s 0s" : "0s 0.3s")},
        background-color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    background-color: white;
    transform: ${(props) => (props.show ? "none" : "translateY(-700px)")};
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadow};

    svg {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }
`;

export default Modal;
