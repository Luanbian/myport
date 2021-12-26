import React from "react";
import capa from "../styles/img/principal/capa.png";
import perfil from "../styles/img/principal/ftperfil.png";
import Projects from "../projects";
import { Container } from "./homestyled";

function Home(){
    return(
        <>
            <Container/>
            <img src={perfil} alt="ft-de-perfil" style={{position: 'absolute', left: '45pc', top: '1pc'}}/>
            <img src={capa} alt="capa-do-projeto" style={{width: '100%'}}/>
            <Projects/>
        </>
    )
}

export default Home;

//1360 width
//400 height