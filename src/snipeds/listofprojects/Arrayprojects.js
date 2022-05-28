import React from "react";
import slu from '../../styles/img/projects/slu.jpeg';
import netflix from '../../styles/img/projects/Netflix.png';
import letmeask from '../../styles/img/projects/letmeask.svg';
import youtube from '../../styles/img/projects/youtube.svg';
import move from '../../styles/img/projects/move.svg';

export const ArrayProjects = [
    {
        id: 1,
        img: youtube, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}> Clone do youtube feito com React.js para desenvolver minhas habilidades de recriar um design pronto e complexo </p>,
        link: "https://youtube-styled-components.vercel.app/"
    },
    {
        id: 2,
        img: slu, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Site desenvolvido para uma vaga na Saint Louis University com HTML, CSS e Javascript</p>,
        link: "https://luanbian.github.io/WhySlu/"
    },
    {
        id: 3,
        img: letmeask, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Plataforma de perguntas e respostas com login, página de usuário e de admimistrador, feito com react e firebase</p>,
        link: "https://letmeask-19edd.web.app/"
    },
    {
        id: 4,
        img: netflix, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Em breve, um clone da interface da Netflix usando Next.js e Typescript</p>,
        link: "/"
    },
    {
        id: 5,
        img: move, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Site construido com next.js baseado no método de estudos pomodoro, ou seja, um timer que revesa entre estudo e descanso com ganho de pontos e desafios para se exercitar </p>,
    link: "https://move-it-tau-seven.vercel.app/"
    },
];
