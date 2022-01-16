import React from "react";
import perfil from "../styles/img/principal/ftperfil.png";
import imgper from '../styles/img/about/aboutmeper.png';

export const numbers = [
    {
        id: 1, 
        img : <img src={perfil} style={{width:'150px'}}/>,
    },
    {
        id: 2,
        img:  <img src={imgper} style={{width:'150px'}}/>
    }
];

export const texto = [
    {
        id: 3,
        text : <h1>Lorem Lorem</h1>
    },
    {
        id: 4,
        text: <h1>lorem lorem 2</h1>
    }
];
