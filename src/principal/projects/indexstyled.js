import styled, { keyframes } from "styled-components";

const typing = keyframes`
    from {width: 0}
    to {width:25%}
`;

const blinkAnimation = keyframes`
    from, to {border-color: transparent}
    50% { border-color: #00D8FF}
`;

export const Title = styled.div`
    color: rgb(53, 51, 51);
    font-family: 'PoppinsBold';
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
    display: flex;
    flex-direction: row;
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
    border: solid #ef5a50;
    border-radius: 22px;
`;