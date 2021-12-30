import styled, { keyframes } from "styled-components";

const typing = keyframes`
    from {width: 0}
    to {width:20%}
`;

const blinkAnimation = keyframes`
    from, to {border-color: transparent}
    50% { border-color: #00D8FF}
`;

export const Title = styled.div`
    color: black;
    font-size: 30px;
    overflow: hidden;
    white-space: nowrap;
    border-right: .15em solid green;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        ${typing} 3.5s steps(30, end) infinite,
        ${blinkAnimation} .5s step-end infinite;
`;