import styled from "styled-components";
import {device} from '../styles/sizes/size';

export const Head = styled.div`
  background-color: #1882c5;
  max-width: 100vw;
  width:100%;
  height: 8vh;
`;

export const Ul = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  text-align: initial;
  padding-top: 0.2pc;
`;

export const Li = styled.li`
  display: inline-block;
  padding-left: 2%;
  padding-top: 2%;
  position: relative;
  top: -1.5pc;

  @media ${device.tablet}{
    display: none;
  } 
`;

export const Text = styled.button`
  color: white;
  font-size: 2rem;
  font-family: 'PoppinsRegular';
  background-color: #ef5a50;
  border-radius: 10px;
  padding: 7px;
  width: 100%;
  height: auto;
  transition: all .5s;
  :hover{
    cursor: pointer;
    border-radius: 20px;
    background-color: #8f362f;
  }
`;

export const Imglogo = styled.img`
  position:relative;
  top:30px;
  left:15px;
`;

export const Button = styled.button` 
  border: none;
  background-color: #1882c5;
  
  @media (min-width: 768px){
    display: none;
  }
`;