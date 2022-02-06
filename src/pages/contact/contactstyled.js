import styled from 'styled-components';

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -110px;
    padding-top: 90px;
    margin-left: 65%;
`;

export const Social = styled.p` 
  font-size: 35px;
`;

export const Button = styled.button`
    width: 120px;
    height: 120px;
    margin: 15px;
    background-color: red;
    border-radius: 22px;
    color:#fff;
    cursor:pointer;
    transition: all 1s;
    :hover{
        transform: rotateZ(-360deg) 
    }
`;

export const In = styled.i`
    z-index:10;
    position: relative;
`;

export const SocialMedia = styled.div` 
    display: flex;
    width: 600px;
`;