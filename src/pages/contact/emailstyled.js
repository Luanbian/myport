import styled from 'styled-components';

export const Card = styled.div`
    width: 600px;
    height: 670px;
    margin-left: 150px;
    margin-top: -30%;
`;

export const Title = styled.h1`
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: black;
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
    height: 32px;
`;

export const Campos = styled.div` 
    background-color: white;
    display: flex;
    flex-direction: column;
    height: auto;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
    border: solid 3px green;
    padding: 3px;
`;