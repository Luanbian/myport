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
    font-size: 45px;
    overflow: hidden;
    white-space: nowrap;
    border-right: .15em solid green;
    margin: 0 auto;
    margin-bottom: -140px;
    letter-spacing: .15em;
    animation: 
        ${typing} 3.5s steps(30, end) infinite,
        ${blinkAnimation} .5s step-end infinite
    ;
`;

export const ProjectsAll = styled.div` 
    width: 100%;
    height: 600px;
    padding-top: 25px;
    padding-bottom: 25px;
`;

export const ProjectsText = styled.div` 
    margin-left: 30%;
    display: flex;
    justify-content: center;
    margin-top: -290px;
    padding-right: 90px;
`;

export const ProjectsImage = styled.img` 
    display: inline-block;
    margin-top: 190px;
    width: 400px;
    height: 400px;
    margin-left: 150px;
    transition: all .5s;
    border: 10px solid #eeee;
    :hover{
        border: 10px solid #ef5a50;
        border-radius: 50%;
        -webkit-transform: rotateZ(-360deg) scale(1.2);
        transform: rotateZ(-360deg) scale(1.2);
    }
`;