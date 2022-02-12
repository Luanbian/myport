import React, { Suspense } from "react";
import {Wait, CardBackend, CardFrontend, Title, Description, Card, Intro, HardSkill, SoftSkills, CardSoft, CardMobile, Hardcard, Logos, Imagehab, Imagehaback} from './styledhabilits';
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
                <div data-aos="fade-up-right">
                    <Logos>
                        <h2>Front-end</h2>
                        <img src={ImgFront} alt="titulo-front"/>
                    </Logos>
                </div>
                <Hardcard>
                    <div data-aos="flip-left">
                        <Imagehab src={css} alt="css"/>
                        <Imagehab src={git} alt="git"/>
                        <Imagehab src={html} alt="html"/>
                        <Imagehab src={react} alt="react.js"/>
                        <Imagehab src={javascript} alt="js"/>
                        <Imagehab src={typescript} alt="ts"/>
                    </div>
                </Hardcard>
            </CardFrontend>
            <CardBackend>
                <div data-aos="fade-up-left">
                    <Logos>
                        <h2>Back-end</h2>
                        <img src={ImgBack} style={{width: '512px'}} alt="titulo-back"/>
                    </Logos>
                </div>
                <Hardcard>
                    <div data-aos="flip-right">
                        <Imagehaback src={node} alt="node"/>
                        <Imagehaback src={mysql} alt="db"/>
                        <Imagehab src={git}   alt="git"/>
                        <Imagehaback src={mongo} alt="mongodb"/>
                    </div>
                </Hardcard>
            </CardBackend>
            <CardMobile>
                <div data-aos="flip-up">
                    <Logos>
                        <h2>Mobile</h2>
                        <img src={ImgMobile} style={{width:'512px'}} alt="titulo-mobile"/>
                    </Logos>
                </div>
                <Hardcard>
                    <div data-aos="flip-down">
                        <Imagehab src={native} alt="react-native"/>
                        <Imagehab src = {typescript} alt="types"/>
                    </div>
                </Hardcard>
            </CardMobile>
            <SoftSkills>Soft Skills</SoftSkills>
            <CardSoft>
                <div data-aos="zoom-out-up">
                    <Logos>
                        <h2>Soft Skills</h2>
                        <img src={ImgSoft} style={{width: '512px'}} alt="titulo-soft"/>
                    </Logos>
                </div>
                <Hardcard>
                    <div data-aos="zoom-out-down">
                        <ul>
                            <h2>Inglês fluente</h2>
                            <h2>Trabalho em equipe</h2>
                            <h2>Liderança</h2>
                        </ul>
                    </div> 
                </Hardcard>
            </CardSoft>
        </>
    )
}

export default Hability;