import React from "react";
import { Title } from "./indexstyled";
import NumberList from "../../components/listofprojects/Numberlist";
import { ArrayProjects } from "../../components/listofprojects/Arrayprojects";

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