import styled from 'styled-components';

export const Card = styled.div`
    background-color: green;
    width: 500px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 22px;
    box-shadow: 12px 12px 8px gray;
`;

export const Title = styled.h1`
    font-size: 40px;
`;

export const Inputname = styled.input` 
    border-radius: 5px;
    margin: 5px;
    height: 50px;
    font-size: 20px;
`;

export const Inputemail = styled.input` 
    border-radius: 5px;
    margin: 5px;
    height: 50px;
    font-size: 20px;
`;

export const Inputsubject = styled.input` 
    border-radius: 5px;
    margin: 5px;
    height: 50px;
    font-size: 20px;
`;

export const Textarea = styled.textarea`
    border-radius: 5px;
    margin: 5px;
    font-size: 20px;
    height: 42%;
    resize: none;
`;

export const Inputenviar = styled.input` 
    margin: 5px;
`;

export const Campos = styled.div` 
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 326px;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
    border: solid 3px green;
`;