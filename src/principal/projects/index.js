import React from "react";
import { Title } from "./indexstyled";
import NumberList from "../../snipeds/listofprojects/Numberlist";
import { ArrayProjects } from "../../snipeds/listofprojects/Arrayprojects";

function Projects(){
    return(
        <>
            <Title>
                Meus projetos!
            </Title>
            <NumberList ArrayProjects={ArrayProjects}/>
        </>
    );
}

export default Projects;