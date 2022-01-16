import React from "react";
import { Title, ProjectsAll } from "./indexstyled";
import NumberList from "../components/listofprojects/Numberlist";
import {texto, numbers } from "../components/listofprojects/Arrayprojects";

function Projects(){
    return(
        <>
            <Title>
                Meus projetos
            </Title>
            <ProjectsAll>
                    <NumberList numbers={numbers} texto={texto} />
            </ProjectsAll>
        </>
    );
}

export default Projects;