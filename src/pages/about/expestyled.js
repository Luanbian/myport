import styled from 'styled-components';
import { device } from '../../styles/sizes/size';

export const Tittle = styled.h1` 
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
    font-family: 'PoppinsBold';
    text-decoration: underline;
    color: rgb(53, 51, 51);
    font-size: 5.2rem;
`;

export const All = styled.div` 
    display: flex;
    flex-direction: row;
    width: 100vw;
`;

export const ImgAgathos = styled.img` 
    width: 420px;
    height: 420px;
    border-radius:22px;
    margin-left: 60px;
    margin-bottom: 45px;
    border: #ef5a50 solid;
    @media ${device.mobileS}{
        display: none;
    }
`;

export const CardExp = styled.div` 
    display: inline-block;
    margin-left: 15%;
    margin-top: -3%;
`;

export const Vaga = styled.h2` 
    font-size: 3.6rem;
    font-family: 'PoppinsRegular';
`;

export const Data = styled.p` 
    display: flex;
    font-size: 2.6rem;
    padding: 15px;
    font-family: 'PoppinsRegular';
`;

export const Line = styled.div` 
    width: 150px;
    height: 1px;
    background-color: black;
    margin:15px;
`;

export const Description = styled.p` 
    font-family: 'PoppinsRegular';
    font-size: 2.3rem;
`;