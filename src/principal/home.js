import React from "react";
import capa from "../styles/img/principal/capa.png";
import perfil from "../styles/img/principal/ftperfil.png";
import Projects from "../projects";
import { Container, Imgperfil } from "./homestyled";

function Home(){
    return(
        <>
            <Container/>
            <Imgperfil src={perfil} alt="ft-de-perfil"/>
            <img src={capa} alt="capa-do-projeto" style={{width: '100%'}}/>
            <Projects/>
        </>
    )
}

export default Home;
