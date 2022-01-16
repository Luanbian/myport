import React from "react";
import perfil from "../../styles/img/principal/ftperfil.png";
import imgper from '../../styles/img/about/aboutmeper.png';

export const ArrayProjects = [
    {
        id: 1, 
        img : <img src={perfil} style={{width:'150px'}} alt="img teste"/>,
        text: <h1>Lorem Lorem</h1>
    },
    {
        id: 2,
        img:  <img src={imgper} style={{width:'150px'}} alt="img teste"/>,
        text: <h1>lorem lorem 2</h1>
    }
];
