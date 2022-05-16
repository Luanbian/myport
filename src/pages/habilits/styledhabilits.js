import styled from 'styled-components';

export const Wait = styled.div` 
   position: relative;
   width: 400px;
   height: 400px;
   margin-right: 30px;
`;

export const Topo = styled.div` 
   display: flex;
`;

export const Title = styled.h1` 
   font-size: 50px;
   margin-top: -50px;
   font-family: 'PoppinsBold';
   text-decoration: underline;
   color: rgb(65, 63, 63);
`;

export const Description = styled.p` 
   font-size: 30px;
   font-family: 'PoppinsRegular';
   width: 90%;
   text-indent: 10px;
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
   &:hover{
      transform: scale(1.2);
   }
`;

export const ContentHab = styled.div` 
   display: flex;
   justify-content: center;
   margin-bottom: 25px;
`;
