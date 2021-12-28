import React from 'react';
import {Card, Title, Inputname,Inputsubject, Inputenviar, Textarea, Campos} from './emailstyled';

function Email(){
    return(
        <>
        <Card>
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="0df9efde-d3a4-4ac9-aaf6-b1b6e6a2bf1b"/>
                <Title>Me envie um e-mail</Title>
                <Campos>
                <Inputname type="text" name="name" placeholder='Me diga seu nome'/>
                <Inputsubject type="text" name="subject" placeholder='Sobre o que quer falar?'/>
                <Textarea name="message" placeholder='Mensagem'></Textarea>
                <Inputenviar type="submit" value="Enviar" />
                </Campos>
            </form>
        </Card>
        </>
    )
}

export default Email;