import React from "react";
import restaurant from '../../styles/img/projects/restaurant.jpeg';
import youtube from '../../styles/img/projects/youtube-page.jpg';
import slu from '../../styles/img/projects/slu.jpeg';

export const ArrayProjects = [
    {
        id: 1, 
        img : youtube,
        text: <p style={{fontSize: '30px', fontFamily: 'PoppinsRegular'}}>Lorem Lorem</p>
    },
    {
        id: 2,
        img: restaurant,
        text: <p style={{fontSize: '30px', fontFamily: 'PoppinsRegular'}}>lorem lorem 2</p>
    },
    {
        id: 3,
        img: slu, 
        text: <p style={{fontSize: '30px', fontFamily: 'PoppinsRegular'}}>Lorem lorem 3</p>
    }
];
