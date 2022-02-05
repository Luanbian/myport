import React from 'react';
import {Title, ImgAgathos, CardExp, Vaga, Data, Description, Line, All} from './expestyled';

function Experience(){
    return(
        <>
            <Title>
                Experiência profissional
            </Title>
            <All>
                <ImgAgathos data-aos="fade-right"/>
                <CardExp>
                    <Vaga>Programador Javascript</Vaga>
                    <Data>
                        2021
                        <Line/>
                        atual
                    </Data>
                    <Description>Descrição da vaga Lorem Lorem</Description>
                </CardExp>
            </All>
        </>
    )
}

export default Experience;