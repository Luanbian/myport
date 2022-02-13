import React from "react";
import restaurant from '../../styles/img/projects/restaurant.jpeg';
import youtube from '../../styles/img/projects/youtube-page.jpg';
import slu from '../../styles/img/projects/slu.jpeg';

export const ArrayProjects = [
    {
        id: 1, 
        img : youtube,
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Um clone da interface do youtube usando React.js</p>
    },
    {
        id: 2,
        img: restaurant,
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Um site para um restaurante ficticio</p>
    },
    {
        id: 3,
        img: slu, 
        text: <p style={{fontSize: '25px', fontFamily: 'PoppinsRegular'}}>Site desenvolvido para uma vaga na Saint Louis University</p>
    },
];
