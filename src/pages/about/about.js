import React from "react";
import {Imgper, Text, Context, CardFront, CardBack, Title, Imgfundo} from './aboutstyled';
import {Tittle, ImgAgathos, CardExp, Vaga, Data, Description, Line, All} from './expestyled';
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
            <Tittle>
                Experiência profissional
            </Tittle>
            <All>
                <div data-aos="fade-right">
                    <ImgAgathos />
                </div>
                <CardExp>
                    <div data-aos="fade-left">
                    <Vaga>Programador Javascript</Vaga>
                    <Data>
                        2021
                        <Line/>
                        atual
                    </Data>
                    <Description>Descrição da vaga Lorem Lorem</Description>
                    </div>
                </CardExp>
            </All>
        </>
    )
}

export default About;