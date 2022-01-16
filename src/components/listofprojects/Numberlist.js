import React from "react";
import {ProjectsImage, ProjectsAll, ProjectsText} from "../../principal/projects/indexstyled";

function NumberList(props) {
    const ArrayProjects = props.ArrayProjects;
    const listItems = ArrayProjects.map((number) =>
        <ProjectsAll key={number.id}>
            <ProjectsImage>
                {number.img}
            </ProjectsImage>
            <ProjectsText>
                {number.text}
            </ProjectsText>
        </ProjectsAll>
    );
    return <> {listItems} </>
}

export default NumberList;