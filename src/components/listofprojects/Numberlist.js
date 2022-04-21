import React from "react";
import {ProjectsImage, ProjectsAll, ProjectsText, Comp} from "../../principal/projects/indexstyled";

export default function NumberList(props) {
  const ArrayProjects = props.ArrayProjects;

  const listItems = ArrayProjects.map((number) =>
    <ProjectsAll key={number.id}>
      <Comp href = {number.link} target="_blank">
        <ProjectsImage src={number.img} alt="imagens dos projetos" />
      </Comp>
      <ProjectsText>
        {number.text}
      </ProjectsText>
    </ProjectsAll>
  );

  return <> {listItems} </>
}