import React from "react";
import {ProjectsImage, ProjectsAll, ProjectsText, Comp} from "../../principal/projects/indexstyled";
import Slider from "react-slick";

export default function NumberList(props) {
  const ArrayProjects = props.ArrayProjects;

  const listItems = ArrayProjects.map((number) =>
    <ProjectsAll key={number.id}>
      <Comp href = {number.link} target="_blank"><ProjectsImage src={number.img} alt="imagens dos projetos" /> </Comp>
      <ProjectsText>
        {number.text}
      </ProjectsText>
    </ProjectsAll>
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <Slider {...settings} style={{width: '98%'}}>
      {listItems}
    </Slider>
  );
}