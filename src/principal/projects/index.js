import React from "react";
import { Title } from "./indexstyled";
import ProjectList from "../../components/ProjectList";
import { ArrayProjects } from "../../snipeds/listofprojects/Arrayprojects";

function Projects(){
    return(
        <>
            <Title>
                Meus projetos!
            </Title>
            <ProjectList ArrayProjects={ArrayProjects}/>
        </>
    );
}

export default Projects;