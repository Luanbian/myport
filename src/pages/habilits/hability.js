import React, { Suspense } from "react";
import {Wait, Title, Description, Intro, Topo, Imagehab, ContentHab, CardHab, ColumOne, DescriptionTopo} from './styledhabilits';
import {BackHead} from '../../pages/contact/emailstyled';
import { Canvas } from '@react-three/fiber';
import css from '../../styles/img/habilits/css3.png';
import git from '../../styles/img/habilits/git.png';
import html from '../../styles/img/habilits/html.png';
import react from '../../styles/img/habilits/react.png';
import javascript from '../../styles/img/habilits/javascript.png';
import typescript from '../../styles/img/habilits/typescript.png';
import mysql from '../../styles/img/habilits/mysql.png';
import firebase from '../../styles/img/habilits/firebase.png';
import sass from '../../styles/img/habilits/sass.png';
import jest from '../../styles/img/habilits/jest.png';
import Earth from "../../snipeds/sphere/sphere";

function Hability(){
    return(
        <>
            <BackHead></BackHead>
            <Topo>
                <Intro>
                    <Title> Habilidades </Title>
                    <DescriptionTopo>
                        Minha Habilidades giram em torno do Javascript por ser uma linguagem muito poderosa, para o front-end eu gosto muito do react.js, para o back-end considero muito o uso do node.js e quando o assunto é mobile o react-native resolve!
                    </DescriptionTopo>
                </Intro>
                <div>
                    <Wait>
                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </Wait>
                </div>
            </Topo>
            <ContentHab>
                <ColumOne>
                    <CardHab>
                        <Imagehab src={typescript} alt='typescript'/>
                        <Description>Typescript</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={javascript} alt='javascript'/>
                        <Description>Javascript</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={mysql} alt='mysql'/>
                        <Description>MySQL</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={css} alt='css'/>
                        <Description>CSS</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={git} alt='git'/>
                        <Description>GIT</Description>
                    </CardHab>
                </ColumOne>
                <ColumOne>
                    <CardHab>
                        <Imagehab src={react} alt='react'/>
                        <Description>React</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={jest} alt='jest'/>
                        <Description>Jest</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={firebase} alt='firebase'/>
                        <Description>Firebase</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={sass} alt='sass'/>
                        <Description>SASS</Description>
                    </CardHab>
                    <CardHab>
                        <Imagehab src={html} alt='html'/>
                        <Description>HTML</Description>
                    </CardHab>
                </ColumOne>
            </ContentHab>
        </>
    )
}

export default Hability;