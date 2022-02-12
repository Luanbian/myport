import React from "react";
import {ProjectsImage, ProjectsAll, ProjectsText} from "../../principal/projects/indexstyled";
import Slider from "react-slick";

export default function NumberList(props) {
    const ArrayProjects = props.ArrayProjects;
    const listItems = ArrayProjects.map((number) =>
        <div data-aos="fade-up">
            <ProjectsAll key={number.id}>
                <ProjectsImage src={number.img} alt="imagens dos projetos"/>
                <ProjectsText>
                    {number.text}
                </ProjectsText>
            </ProjectsAll>
        </div>
    );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} style={{width: '90%'}}>
        {listItems}
    </Slider>
  );
}