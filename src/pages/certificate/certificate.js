import React from "react";
import harvard from '../../styles/img/certificate/harvard-campus.jpg';
//import hopkins from '../../styles/img/certificate/Hopkins-campus.jpg';
//import certificadohar from '../../styles/img/certificate/certificadohar.png';
import certificadoJH from '../../styles/img/certificate/certificadoJH.png'; 

function Certificate(){
    return(
        <>
            <img src={harvard} alt="imagem-de-fundo-harvard" style={{marginTop: '-160px', width: "99.9%"}}/>
            <img src={certificadoJH} alt="certificado-de-harvard" style={
                {
                 width: '750px',
                 height: '650px', 
                 position: 'absolute',
                 left: '34pc',
                 marginTop: '-7pc',
                 borderRadius: '10px'
                }
            }/>
        </>
    )
}

export default Certificate;