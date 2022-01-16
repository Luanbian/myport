import React from "react";
import {Imgper, Text, Context, CardFront, CardBack, Title, Imgfundo} from './aboutstyled';
import Experience from './Experience/experience';
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
                        Desenvolvedor Web e Mobile
                    </h2>
                </CardBack>
            </Context>
            <Experience />
        </>
    )
}

export default About;