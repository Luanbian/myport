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
    margin-bottom: -140px;
    letter-spacing: .15em;
    animation: 
        ${typing} 3.5s steps(30, end) infinite,
        ${blinkAnimation} .5s step-end infinite;
`;


export const ProjectsAll = styled.div` 
    width: 100%;
    height: 600px;
    padding-top: 45px;
    padding-bottom: 50px;
`;

export const ProjectsText = styled.div` 
    margin-left: 30%;
    display: flex;
    justify-content: center;
    margin-top: -290px;
    padding-right: 90px;
`;

export const ProjectsImage = styled.div` 
    background-color: green;
    display: inline-block;
    margin-top: 190px;
    width: 300px;
    height: 300px;
    margin-left: 150px;
    transition: all .5s;
    border: 10px solid #eeee;
    :hover{
        border: 10px solid #ef5a50;
        border-radius: 50%;
        -webkit-transform: rotateZ(-360deg) scale(1.6);
        transform: rotateZ(-360deg) scale(1.6);
    }
`;