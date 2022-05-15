import styled, { keyframes } from "styled-components";

const typing = keyframes`
    from {width: 0}
    to {width:40%}
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
    margin-bottom: 0px;
    letter-spacing: .15em;
    animation: 
        ${typing} 3.5s steps(30, end) infinite,
        ${blinkAnimation} .5s step-end infinite
    ;
`;

export const ProjectsAll = styled.div` 
    width: 80%;
    height: 320px;
    display: flex;
    margin: 10%;
    border: 1px solid #ef5a50;
    box-shadow: 8px  8px 16px rgba(0,0,0,0.8);
    border-radius: 8px;
    :hover{
        background: #DBDCDD;
    }
`;

export const ProjectsText = styled.p` 
    padding: 50px;
    font-family: 'PoppinsRegular', sans-serif;
    font-weight: 600;
`;

export const ProjectsImage = styled.img` 
    width: 300px;
    height: 300px;
    padding: 10px;
    border-radius: 22px;
`;

export const Comp = styled.a`
    text-decoration: none;
    color: rgb(53,51,51);
`;