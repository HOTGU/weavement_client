import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { throttle } from "lodash";

function Navbar() {
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = useMemo(
        () =>
            throttle(() => {
                console.log("나 스크롤됐어");
                if (window.scrollY === 0) return setIsScroll(false);
                if (window.scrollY > 0) return setIsScroll(true);
            }, 200),
        [setIsScroll]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <NavbarContainer className="wide-container" isScroll={isScroll}>
            <Wrapper className="default-container">
                <Link to="/" className="logo">
                    WeaveMent
                </Link>
                <Link to="/portfolio">포트폴리오</Link>
            </Wrapper>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    height: ${(props) => props.theme.navbarHeight};
    /* opacity: 100%; */
    background-color: ${(props) => (props.isScroll ? props.theme.bgColor : "")};
    transition: 0.3s;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .logo {
        color: ${(props) => props.theme.accentColor};
    }
`;

export default Navbar;
