import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 6px;
  }

  100% { 
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: inherit;
`;

const Dot = styled.div`
    background-color: ${(props) => props.theme.accentColor};
    border-radius: 50%;
    width: 4px;
    height: 4px;
    margin: 0 px;
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${(props) => props.delay};
`;

const Loader = ({ isCenter = true, ...props }) => {
    return (
        <Wrapper>
            <h3>로딩</h3>
            <Dot delay="0s" />
            <Dot delay="0.1s" />
            <Dot delay="0.2s" />
        </Wrapper>
    );
};

export default Loader;

// import styled, { keyframes } from "styled-components";

// const rotate360 = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   80% {
//     transform: rotate(360deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// `;

// const Wrapper = styled.div`
//     position: fixed;
//     left: 0px;
//     top: 0px;
//     width: 100%;
//     height: 100%;
//     z-index: 9999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const SLoader = styled.div`
//     animation: ${rotate360} 0.8s ease-in-out infinite;
//     border: 3px solid ${(props) => props.theme.hoverColor};
//     border-top: 3px solid ${(props) => props.theme.accentColor};
//     background: transparent;
//     width: ${(props) => props.width || "20px"};
//     height: ${(props) => props.height || "20px"};
//     border-radius: 50%;
// `;

// const Loader = ({ isCenter = true, ...props }) => {
//     if (!isCenter) return <SLoader {...props} />;

//     return (
//         <Wrapper>
//             <SLoader {...props} />
//         </Wrapper>
//     );
// };

// export default Loader;
