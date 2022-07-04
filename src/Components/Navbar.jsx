import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { throttle } from "lodash";

import scrollLogo from "../images/scroll_logo.png";
import defaultLogo from "../images/default_logo.png";

function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const location = useLocation();

    const isMain = Boolean(location.pathname === "/");

    const handleScroll = useMemo(
        () =>
            throttle(() => {
                if (window.scrollY === 0) return setIsScroll(false);
                if (window.scrollY > 0) return setIsScroll(true);
            }, 200),
        [setIsScroll]
    );

    useEffect(() => {
        if (isMain) {
            window.addEventListener("scroll", handleScroll);
        }
    });

    return (
        <NavbarContainer className="wide-container" isMain={isMain} isScroll={isScroll}>
            <Wrapper className="default-container">
                <Link to="/">
                    <img
                        src={isMain ? (isScroll ? defaultLogo : scrollLogo) : defaultLogo}
                        alt="logo"
                        className="logo"
                    />
                </Link>
                <div className="flex__item">
                    <a
                        href="https://blog.naver.com/weavement"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        전문가 칼럼
                    </a>
                    <Link to="/portfolio">포트폴리오</Link>
                    <Link to="/contact">문의하기</Link>
                </div>
            </Wrapper>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    height: ${(props) => props.theme.navbarHeight};
    color: ${(props) =>
        props.isMain
            ? props.isScroll
                ? props.theme.textColor
                : "white"
            : props.theme.textColor};
    background-color: ${(props) =>
        props.isMain ? (props.isScroll ? props.theme.bgColor : "") : props.theme.bgColor};
    border-bottom: 1px solid
        ${(props) =>
            props.isMain
                ? props.isScroll
                    ? props.theme.borderColor
                    : "none"
                : props.theme.borderColor};
    transition: 0.3s;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .logo {
        width: 85px;
    }
    .flex__item {
        display: flex;
        gap: 15px;
    }
`;

export default Navbar;
