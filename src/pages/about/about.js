import React from "react";
import {Imgper, Text, Context, Title, Imgfundo} from './aboutstyled';
import imgper from '../../styles/img/about/aboutmeper.png';
import imgfundo from '../../styles/img/about/fundo.jpg';

function About(){
    return(
        <>
            <Imgfundo src={imgfundo}/>
            <Imgper src={imgper} />
            <Context>
                <Title>
                    Sobre mim
                </Title>
                <Text>
                    Lorem Lorem
                </Text>
            </Context>
            <br></br>
            <br></br>
            <br></br>
            <p>e aqui em baixo as experiencias</p>
        </>
    )
}

export default About;