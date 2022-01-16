import React from "react";
import { Title, ProjectsAll, ProjectsImage, ProjectsText } from "./indexstyled";
import perfil from "../styles/img/principal/ftperfil.png";
import imgper from '../styles/img/about/aboutmeper.png';

const numbers = [
    {
        id: 1, 
        img : <img src={perfil} style={{width:'150px'}}/>,
    },
    {
        id: 2,
        img:  <img src={imgper} style={{width:'150px'}}/>
    }
];

const texto = [
    {
        id: 3,
        text : <h1>Lorem Lorem</h1>
    },
    {
        id: 4,
        text: <h1>lorem lorem 2</h1>
    }
];

function NumberList(props) {
    const numbers = props.numbers;
    const texto = props.texto;
    const listText = texto.map((text) => 
        <ProjectsText key={text.id}>
            {text.text}
        </ProjectsText>
    )
    const listItems = numbers.map((number) =>
        <ProjectsImage key={number.id}>
            {number.img}
        </ProjectsImage>
    );
    return ( 
        <>
            {listItems}
            {listText}  
        </>
    );
}

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