import React from "react";
import {ProjectsImage, ProjectsText} from "../../projects/indexstyled";

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

export default NumberList;