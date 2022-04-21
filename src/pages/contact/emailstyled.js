import styled from 'styled-components';

export const Card = styled.div`
    width: 600px;
    height: 670px;
    margin-left: 8%;
    margin-top: -6%;
`;

export const Title = styled.h1`
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: rgb(65, 63, 63);
    font-family: 'PoppinsBold';
    text-decoration: underline;
    margin-left: -100px;
`;

export const Inputname = styled.input` 
    border-radius: 5px;
    margin: 5px;
    height: 50px;
    font-size: 20px;
    margin-bottom: 40px;
`;

export const Inputemail = styled.input` 
    border-radius: 5px;
    margin: 5px;
    height: 50px;
    font-size: 20px;
    margin-bottom: 40px;
`;

export const Textarea = styled.textarea`
    border-radius: 5px;
    margin: 5px;
    font-size: 20px;
    height: 42%;
    resize: none;
`;

export const Inputenviar = styled.input` 
    margin: 10px;
    height: 60px;
    width: 120px;
    margin-left: auto;
    background-color: #1882c5;
    color: white;
    border-radius: 15px;
    border: none;
    font-family: 'PoppinsRegular';
    font-size: large;
    :hover{
        cursor: pointer;
        background-color: hsl(203, 75%, 27%);
    }
`;

export const Campos = styled.div` 
    display: flex;
    flex-direction: column;
    height: auto;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
    padding: 8px;
`;