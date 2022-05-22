import styled from 'styled-components';

export const MenuToggle = styled.div` 
  width: 40px;
  height: 30px;
  margin-top: 35px;
  position: absolute;
  margin-left: 30px;
`;

export const One = styled.div` 
  background-color: #FFF;
  height: 5px;
  width: 100%;
  margin: 6px auto;
`;

export const Two = styled.div` 
  background-color: #FFF;
  height: 5px;
  width: 100%;
  margin: 6px auto;
`;

export const Three = styled.div` 
  background-color: #FFF;
  height: 5px;
  width: 100%;
  margin: 6px auto;
`;

export const BarraOne = styled.div` 
  background-color: #FFF;
  height: 5px;
  position: absolute;
  width: 100%;
  margin: 6px auto;
  transform: rotate(45deg); 
  z-index: 10;
`;

export const BarraTwo = styled.div` 
  background-color: #FFF;
  position: absolute;
  height: 5px;
  width: 100%;
  margin: 6px auto;
  transform: rotate(-45deg);
  z-index: 10;
`;

export const Container = styled.div` 
  position: absolute;
  left: 0;
  top: 0;
  background: #1882c5;
  height: 100vh;
  width: 100vw;
  z-index: 3;
`;

export const List = styled.div` 
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  margin-top: 25vh;
  gap: 25px;
`;