import React from "react";
import capa from "../styles/img/principal/capaprincipal.png";
import Projects from "./projects/index";
import {Imgcapa} from './homestyled';

function Home(){
    return(
        <>
            <Imgcapa src={capa} alt="capa-do-projeto" style={{width: '100%'}}/>
            <Projects/>
        </>
    )
}

export default Home;
