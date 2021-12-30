import React from "react";
import {Imgper, Text, Context, CardFront, CardBack, Title, Imgfundo} from './aboutstyled';
import imgper from '../../styles/img/about/aboutmeper.png';
import imgfundo from '../../styles/img/about/fundo.jpg';

function About(){
    return(
        <>
            <Imgfundo src={imgfundo}/>
            <Imgper src={imgper} />
            <Context>
                <CardFront>
                    <Title>
                        Sobre mim
                    </Title>
                    <Text>
                        Lorem Lorem
                    </Text>
                </CardFront>
                <CardBack>
                    <h2>
                        Desenvolvedor Full Stack
                    </h2>
                </CardBack>
            </Context>
            <p>e aqui em baixo as experiencias</p>
        </>
    )
}

export default About;