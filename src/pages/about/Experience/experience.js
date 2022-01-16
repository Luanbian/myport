import React from 'react';
import {Title, ImgAgathos, CardExp, Vaga, Data, Description, Line} from './expestyled';

function Experience(){
    return(
        <>
            <Title>
                Experiência profissional
            </Title>
            <ImgAgathos/>
            <CardExp>
                <Vaga>Programador Javascript</Vaga>
                <Data>
                    2021
                    <Line/>
                    atual
                </Data>
                <Description>Lorem Lorem</Description>
            </CardExp>
        </>
    )
}

export default Experience;