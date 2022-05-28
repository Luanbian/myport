import styled from 'styled-components';
import {device} from '../../styles/sizes/size';

export const Wait = styled.div` 
   width: 400px;
   height: 400px;
`;

export const Topo = styled.div` 
   display: flex;
`;

export const Title = styled.h1` 
   font-size: 5.0rem;
   font-family: 'PoppinsBold';
   text-decoration: underline;
   color: rgb(65, 63, 63);
`;

export const Description = styled.p` 
   font-size: 3.0rem;
   font-family: 'PoppinsRegular';
   width: 90%;
   text-indent: 15px;
   padding: 15px;
   text-align: center;
`;

export const DescriptionTopo = styled.p` 
   font-size: 3.0rem;
   font-family: 'PoppinsRegular';
   width: 90%;
   text-indent: 15px;
   padding: 15px;
`;

export const Card = styled.div` 
   display: flex;
   flex-direction: row;
`;

export const Intro = styled.div` 
   flex-direction: column;
   margin-left: 9%;
`;

export const Imagehab = styled.img` 
   width: 90px;
   padding: 20px;
   transition: transform 0.2s;
`;

export const ContentHab = styled.ul` 
   display: flex;
   justify-content: center;
   gap: 90px;
   flex-direction: row;
   margin-top: 5%;
   margin-bottom: 5%;

   @media ${device.tablet}{
      flex-direction: column;
   }
`;

export const CardHab = styled.div` 
   display: flex;
   gap: 35px;
   border: 1px solid #ef5a50;
   width: 38vw;
   border-radius: 8px;
   background: #DBDCDD;
   box-shadow: 8px  8px 16px rgba(0,0,0,0.8);
   transition: transform 0.2s;
   cursor: pointer;
   :hover{
      transform: scale(1.1);
   }

   @media ${device.tablet}{
      width: auto;
   }
`;

export const ColumOne = styled.li` 
   list-style-type: none;
   display: flex;
   flex-direction: column;
   gap: 25px;
`;