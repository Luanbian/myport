import styled from "styled-components";
import {device} from '../../styles/sizes/size'

export const Title = styled.div`
    color: rgb(53, 51, 51);
    font-family: 'PoppinsBold';
    font-size: 4.5rem;
    margin: 0 auto;
    letter-spacing: .15em;
    text-align: center;
`;

export const ProjectsAll = styled.div` 
    width: 80%;
    height: 320px;
    display: flex;
    margin: 10%;
    border: 1px solid #ef5a50;
    box-shadow: 8px  8px 16px rgba(0,0,0,0.8);
    border-radius: 8px;
    height: auto;
    :hover{
        background: #DBDCDD;
    }
    
`;

export const ProjectsText = styled.p` 
    padding: 50px;
    font-family: 'PoppinsRegular', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
`;

export const ProjectsImage = styled.img` 
    width: 35%;
    padding: 5%;
    border-radius: 22px;
    @media ${device.mobileS}{
        display: none ;
    }
`;

export const Comp = styled.a`
    text-decoration: none;
    color: rgb(53,51,51);
`;