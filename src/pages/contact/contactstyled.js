import styled from 'styled-components';

export const IconsMedia = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3%;
    margin-left: 40%;
`;

export const Button = styled.button`
    width: 80px;
    height: 80px;
    margin: 15px;
    background-color: #e6e6e6;
    border-radius: 22px;
    color:#6c63ff;
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

export const Total = styled.div` 
    display: flex;
    flex-direction: column;
    width: 50%;
    float: right;
    margin-top: -7%;
    margin-right: 6%;
`;

export const Comp = styled.a``;