import React, { Suspense } from "react";
import {Wait, Title, Description, Card, Intro, Topo, Imagehab} from './styledhabilits';
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
            <Topo>
                <Intro>
                    <Title> Habilidades </Title>
                    <Description>
                        Minha Habilidades giram em torno do Javascript por ser uma linguagem muito poderosa, para o front-end eu gosto muito do react.js, para o back-end considero muito o uso do node.js e quando o assunto é mobile o react-native resolve!
                    </Description>
                </Intro>
                <Card>
                    <Wait>
                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </Wait>
                </Card>
            </Topo>
            <Imagehab src={html} alt='html'/>
            <Imagehab src={css} alt='css'/>
            <Imagehab src={javascript} alt='javascript'/>
            <Imagehab src={typescript} alt='typescript'/>
            <Imagehab src={react} alt='react'/>
            <Imagehab src={git} alt='git'/>
            <Imagehab src={mysql} alt='mysql'/>
            <Imagehab src={firebase} alt='firebase'/>
            <Imagehab src={sass} alt='sass'/>
            <Imagehab src={jest} alt='jest'/>
        </>
    )
}

export default Hability;