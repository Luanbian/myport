import React from "react";
import {Imgper, Text, Context, CardFront, Title, TextB, Principal} from './aboutstyled';
import {Tittle, ImgAgathos, CardExp, Vaga, Data, Description, Line, All} from './expestyled';
import imgper from '../../styles/img/about/aboutmeper.png';
import Agathos from '../../styles/img/about/agathos.png';

function About(){
    return(
        <>
            <Principal>
                <Imgper src={imgper} />
                <Context>
                    <CardFront>
                        <Title>
                            Sobre mim
                        </Title>
                        <TextB>
                            Desenvolvedor Web e Mobile
                        </TextB>
                        <Text>
                            Sou o Luan Almeida, tenho 20 anos e curso análise e desenvolvimento de sistemas, apaixonado por tecnologia resolvi me dedicar no desenvolvimento de Websites e aplicativos mobile. <br/>
                            Aprendi muito sobre Design e programação para ser capaz de criar um front-end muito bem feito e melhorei muito minha lógica e uso de banco de dados e APIs para fazer um back-end excelente!
                        </Text>
                    </CardFront>
                </Context>
            </Principal>
            <Tittle>
                Experiência profissional
            </Tittle>
            <All>
                <ImgAgathos src={Agathos} alt="logo-agathos"/>
                <CardExp>
                        <Vaga>Programador Javascript</Vaga>
                        <Data>
                            2021
                            <Line/>
                            atual
                        </Data>
                        <Description>
                            Fui responsável por manter uma solução excelente para uma escola durante a pandemia, criei junto a uma equipe atividades online para os alunos, utilizando principalmente Javascript e um software chamado Tumult hype.
                        </Description>
                </CardExp>
            </All>
        </>
    )
}

export default About;