import React, { Suspense } from "react";
import {Wait, CardBackend, CardFrontend, CardTotal, Title, Description, Card, Intro, HardSkill, SoftSkills, CardSoft, CardMobile, Frontcard, Backcard, Mobilecard} from './styledhabilits';
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
                    <img src={ImgFront} />
                    <Frontcard>
                        <img src={css} />
                        <img src={git} style={{width: '96px'}}/>
                        <img src={html}/>
                        <img src={react}/>
                        <img src={javascript}/>
                    </Frontcard>
                </CardFrontend>
                <CardBackend>
                    <img src={ImgBack} style={{width: '512px'}}/>
                    <Backcard>
                        <img src={node} />
                        <img src={mysql} />
                        <img src={git} style={{width: '96px'}}/>
                    </Backcard>
                </CardBackend>
                <CardMobile>
                    <img src={ImgMobile} style={{width:'512px'}}/>
                    <Mobilecard>
                        <img src={native} style={{width:'96px'}}/>
                    </Mobilecard>
                </CardMobile>
                <SoftSkills>Soft Skills</SoftSkills>
                <CardSoft>

                </CardSoft>
            </CardTotal>
        </>
    )
}

export default Hability;