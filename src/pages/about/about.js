import React from "react";
import {Imgper, Text, Context, CardFront, CardBack, Title, Imgfundo, TextB} from './aboutstyled';
import {Tittle, ImgAgathos, CardExp, Vaga, Data, Description, Line, All} from './expestyled';
import imgper from '../../styles/img/about/aboutmeper.png';
import imgfundo from '../../styles/img/about/fundo.jpg';
import Agathos from '../../styles/img/about/agathos.png';

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
                            Sou o Luan Almeida, tenho 20 anos e curso análise e desenvolvimento de sistemas, apaixonado por tecnologia resolvi me dedicar no desenvolvimento de Websites e aplicativos mobile. <br/>
                            Aprendi muito sobre Design e programação para ser capaz de criar um front-end muito bem feito e melhorei muito minha lógica e uso de banco de dados e APIs para fazer um back-end excelente!
                        </Text>
                    </CardFront>
                    <CardBack>
                        <TextB>
                            Desenvolvedor Web e Mobile
                        </TextB>
                    </CardBack>
            </Context>
            <Tittle>
                Experiência profissional
            </Tittle>
            <All>
                <div data-aos="fade-right">
                    <ImgAgathos src={Agathos} alt="logo-agathos"/>
                </div>
                <CardExp>
                    <div data-aos="fade-left">
                        <Vaga>Programador Javascript</Vaga>
                        <Data>
                            2021
                            <Line/>
                            atual
                        </Data>
                        <Description>
                            Fui responsável por manter uma solução excelente para uma escola durante a pandemia, criei junto a uma equipe atividades online para os alunos, utilizando principalmente Javascript e um software chamado Tumult hype.
                        </Description>
                    </div>
                </CardExp>
            </All>
        </>
    )
}

export default About;