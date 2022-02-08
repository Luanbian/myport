import styled from "styled-components";

export const Imgper = styled.img`
    position: absolute;
    left:100px;
    top:180px;
`;

export const CardFront = styled.div`
    visibility: visible;
`;

export const CardBack = styled.div`
    visibility: hidden;
    color: #fff;
    text-align: center;
`;

export const Context = styled.div`
    border: solid 1px black;
    border-radius: 12px;
    width: 800px;
    height: 400px;
    padding: 20px;
    margin: 0px;
    margin-left: 50pc;
    margin-top: -55pc;
    box-shadow: 10px 10px 12px gray;
    background-color: rgba(30,33,49,0.7);
    position: absolute;
    :hover{
        ${CardFront}{
            visibility: hidden;
        }
        ${CardBack}{
            visibility: visible;
        }
    }
`;

export const Text = styled.p`
    font-size: 22px;
    color: #ffff;
`;

export const Title = styled.h1`
    color: #ef5a50;
    font-size: 60px;
    margin: 0px;
`;

export const Imgfundo = styled.img`
    margin-top:-18pc;
    width: 100%;
`;