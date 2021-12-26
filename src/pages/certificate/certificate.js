import React from "react";
import harvard from '../../styles/img/certificate/harvard-campus.jpg';
import hopkins from '../../styles/img/certificate/Hopkins-campus.jpg';
import certificadohar from '../../styles/img/certificate/certificadohar.png';
import certificadoJH from '../../styles/img/certificate/certificadoJH.png';
import slider from './slide';
import next from '../../styles/img/certificate/next.png';
import previous from '../../styles/img/certificate/previous.png'; 
import { Imgjh, Imgharcampus, Imghar, Imgnext, Imgprevious, Imgjhcampus } from "./certificatestyle";

function Certificate(){
    return(
        <>
            <Imgharcampus src={harvard} alt="imagem-de-fundo-harvard" id="harcampus"/>
            <Imgjhcampus src={hopkins} alt="imagem-de-fundo-JH" id="jhcampus"/>
            <Imgjh src={certificadoJH} alt="certificado-da-JH" id="cerjh"/>
            <Imghar src={certificadohar} alt="certificado-de-harvard" id="cerhar"/>

            <Imgnext src={next} alt="proxima-foto" onClick={slider} />
            <Imgprevious src={previous} alt="foto-anterior" onClick={slider} />
        </>
    )
}


export default Certificate;