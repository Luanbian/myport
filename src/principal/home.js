import React from "react";
//import {Container} from './homestyled';
import capa from "../img/principal/capa.png"
import Projects from "../projects";

function Home(){
    return(
        <>
            <img src={capa} alt="capa-do-projeto" style={{width: '100%'}}/>
            <Projects/>
        </>
    )
}

export default Home;

//1360 width
//400 height