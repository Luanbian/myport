import React, { Suspense } from "react";
import {Wait, CardBackend, CardFrontend, Title, Description, Card, Intro, HardSkill, SoftSkills, CardSoft, CardMobile, Hardcard, Logos, Imagehab} from './styledhabilits';
import { Canvas } from '@react-three/fiber';
import ImgFront from '../../styles/img/habilits/front.png';
import ImgBack from '../../styles/img/habilits/back.png';
import ImgMobile from '../../styles/img/habilits/mobile.png';
import css from '../../styles/img/habilits/css3.png';
import git from '../../styles/img/habilits/git.png';
import html from '../../styles/img/habilits/html.png';
import react from '../../styles/img/habilits/reactjs.png';
import javascript from '../../styles/img/habilits/javascript.png';
import typescript from '../../styles/img/habilits/typescript.png';
import node from '../../styles/img/habilits/nodejs.png';
import mysql from '../../styles/img/habilits/mysql.png';
import mongo from '../../styles/img/habilits/mongodb.png';
import native from '../../styles/img/habilits/react.png';
import ImgSoft from '../../styles/img/habilits/softskills.png';
import Earth from "../../components/sphere/sphere";

function Hability(){
    return(
        <>
            <Card>
                <Wait>
                    <Canvas>
                        <Suspense fallback={null}>
                            <Earth />
                        </Suspense>
                    </Canvas>
                </Wait>
                <Intro>
                    <Title>
                        Habilidades
                    </Title>
                    <Description>
                        Lorem lorem 
                    </Description>
                </Intro>
            </Card>
            <HardSkill>Hard Skills</HardSkill>
            <CardFrontend>
                <Logos>
                    <h2>Front-end</h2>
                    <img src={ImgFront} alt="titulo-front"/>
                </Logos>
                <Hardcard>
                    <Imagehab src={css} alt="css"/>
                    <Imagehab src={git} alt="git"/>
                    <Imagehab src={html} alt="html"/>
                    <Imagehab src={react} alt="react.js"/>
                    <Imagehab src={javascript} alt="js"/>
                    <Imagehab src={typescript} alt="ts"/>
                </Hardcard>
            </CardFrontend>
            <CardBackend>
                <Logos>
                    <h2>Back-end</h2>
                    <img src={ImgBack} style={{width: '512px'}} alt="titulo-back"/>
                </Logos>
                <Hardcard>
                    <Imagehab src={node} alt="node"/>
                    <Imagehab src={mysql} alt="db"/>
                    <Imagehab src={git} style={{width: '96px'}} alt="git"/>
                    <Imagehab src={mongo} alt="mongodb"/>
                </Hardcard>
            </CardBackend>
            <CardMobile>
                <Logos>
                    <h2>Mobile</h2>
                    <img src={ImgMobile} style={{width:'512px'}} alt="titulo-mobile"/>
                </Logos>
                <Hardcard>
                    <Imagehab src={native} alt="react-native"/>
                    <Imagehab src = {typescript} alt="types"/>
                </Hardcard>
            </CardMobile>
            <SoftSkills>Soft Skills</SoftSkills>
            <CardSoft>
                <Logos>
                    <h2>Soft Skills</h2>
                    <img src={ImgSoft} style={{width: '512px'}} alt="titulo-soft"/>
                </Logos>
                <Hardcard>
                    <ul>
                        <h2>Inglês fluente</h2>
                        <h2>Trabalho em equipe</h2>
                        <h2>Liderança</h2>
                        <h2>Trabalho ético</h2>
                    </ul>
                </Hardcard>
            </CardSoft>
        </>
    )
}

export default Hability;