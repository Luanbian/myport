import styled from "styled-components";

export const Imgper = styled.img`
    position: absolute;
    left:100px;
    top:180px;
`;

export const Context = styled.div`
    border: solid 1px black;
    border-radius: 12px;
    width: 800px;
    height: 400px;
    padding: 20px;
    margin: 0px;
    margin-left: 72pc;
    margin-top: -42pc;
    box-shadow: 10px 10px 12px gray;
    background-color: rgba(30,33,49,0.7);
    position: absolute;
   transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    perspective: 600px;
    transition: .4s;
    :hover{
        transform: rotateX(-180deg);
        margin-top: -55pc;
        margin-left: 45pc;
        box-shadow: 10px -10px 12px gray;
    }
`;

export const CardFront = styled.div`
    backface-visibility: hidden;
    transition: .6s;
`;

export const CardBack = styled.div`
    backface-visibility: hidden;
    transform: rotateX(180deg);
    transition: .6s; 
    color: #fff;
    text-align: center;
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
    width: 100%;
    height:100%;
    margin-top:-18pc;
`;