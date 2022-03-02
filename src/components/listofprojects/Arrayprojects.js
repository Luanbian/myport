import React from "react";
import restaurant from '../../styles/img/projects/restaurant.jpeg';
import youtube from '../../styles/img/projects/youtube-page.jpg';
import slu from '../../styles/img/projects/slu.jpeg';
import earth from '../../styles/img/projects/earthJob.jfif';
import netflix from '../../styles/img/projects/netflix.jfif';

export const ArrayProjects = [
    {
        id: 1, 
        img : youtube,
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Um clone da interface do youtube usando React.js</p>,
        link: "https://youtube-styled-components.vercel.app/"
    },
    {
        id: 2,
        img: restaurant,
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Um site para um restaurante ficticio</p>,
        link: "https://luanbian.github.io/restaurant/"
    },
    {
        id: 3,
        img: slu, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Site desenvolvido para uma vaga na Saint Louis University</p>,
        link: "https://luanbian.github.io/WhySlu/"
    },
    {
        id: 4,
        img: earth, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Animação em 3D do planeta terra feito com react.js e three.js</p>,
        link: "https://www.instagram.com/"
    },
    {
        id: 5,
        img: netflix, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Em breve, um clone da interface da Netflix usando react.js e typescript</p>,
        link: "/hability"
    },
];
