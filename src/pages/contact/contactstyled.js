import styled from 'styled-components';

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    float: right;
    margin-top: 20%;
    margin-right: 22%;
`;

export const Button = styled.button`
    width: 80px;
    height: 80px;
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
`;