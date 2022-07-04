import React from "react";
import styled from "styled-components";
import MainImg from "../images/main.jpg";

function Main() {
    // const meta = {
    //     title: "위브먼트",
    //     meta: {
    //         name: {
    //             description:
    //                 "미술프로젝트, FRP 조형물 제작, 아트웍, 구조물, 시제품, 3D프린트, 금형사출, 미술품심의 등 원스톱 미술컨텐츠 솔루션 제공.",
    //         },
    //     },
    // };
    return (
        <Container className="wide-container">
            {/* <DocumentMeta {...meta} /> */}
            <MainTop src={MainImg}></MainTop>
        </Container>
    );
}

const Container = styled.div``;

const MainTop = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${(props) => props.src}) no-repeat center/cover;
`;

export default Main;
