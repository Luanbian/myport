import React, { Suspense } from "react";
import {Wait, CardBackend, CardFrontend, CardTotal, Title, Description, Card, Intro, HardSkill, SoftSkills, CardSoft, CardMobile, Hardcard, Logos} from './styledhabilits';
import { Canvas } from '@react-three/fiber';
import ImgFront from '../../styles/img/habilits/front.png';
import ImgBack from '../../styles/img/habilits/back.png';
import ImgMobile from '../../styles/img/habilits/mobile.png';
import css from '../../styles/img/habilits/css3.png';
import git from '../../styles/img/habilits/git.png';
import html from '../../styles/img/habilits/html.png';
import react from '../../styles/img/habilits/reactjs.png';
import javascript from '../../styles/img/habilits/javascript.png';
import node from '../../styles/img/habilits/nodejs.png';
import mysql from '../../styles/img/habilits/mysql.png';
import native from '../../styles/img/habilits/react.png';
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

            <CardTotal>
                <HardSkill>Hard Skills</HardSkill>
                <CardFrontend>
                    <Logos>
                        <h2>Front-end</h2>
                        <img src={ImgFront} alt="titulo-front"/>
                    </Logos>
                    <Hardcard>
                        <img src={css} alt="css"/>
                        <img src={git} style={{width: '96px'}} alt="git"/>
                        <img src={html} alt="html"/>
                        <img src={react} alt="react.js"/>
                        <img src={javascript} alt="js"/>
                    </Hardcard>
                </CardFrontend>
                <CardBackend>
                    <Logos>
                        <h2>Back-end</h2>
                        <img src={ImgBack} style={{width: '512px'}} alt="titulo-back"/>
                    </Logos>
                    <Hardcard>
                        <img src={node} alt="node"/>
                        <img src={mysql} alt="db"/>
                        <img src={git} style={{width: '96px'}} alt="git"/>
                    </Hardcard>
                </CardBackend>
                <CardMobile>
                    <Logos>
                        <h2>Mobile</h2>
                        <img src={ImgMobile} style={{width:'512px'}} alt="titulo-mobile"/>
                    </Logos>
                    <Hardcard>
                        <img src={native} style={{width:'96px'}} alt="react-native"/>
                    </Hardcard>
                </CardMobile>
                <SoftSkills>Soft Skills</SoftSkills>
                <CardSoft>

                </CardSoft>
            </CardTotal>
        </>
    )
}

export default Hability;