import React from "react";
import {ProjectsImage, ProjectsAll, ProjectsText, Comp} from "../principal/projects/indexstyled";

export default function ProjectList(props) {
  const ArrayProjects = props.ArrayProjects;

  const listItems = ArrayProjects.map((number) =>
    <div data-aos="fade-right">
      <Comp href = {number.link} target="_blank">
        <ProjectsAll key={number.id}>

          <ProjectsImage src={number.img} alt="imagens dos projetos" />
          
          <ProjectsText>
            {number.text}
          </ProjectsText>
          
        </ProjectsAll>
      </Comp>
    </div>
  );

  return <> {listItems} </>
}