import React from 'react';
import {Card, Title, Inputname,Inputsubject, Inputenviar, Textarea, Campos} from './emailstyled';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/Person';
import TextsmsIcon from '@material-ui/icons/Textsms';

function Email(){
    return(
        <>
        <Card>
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="0df9efde-d3a4-4ac9-aaf6-b1b6e6a2bf1b"/>
                <Title>Me envie um e-mail</Title>
                <Campos>
                <p><PersonIcon/> Me diga seu nome</p>
                <Inputname type="text" name="name"/>
                <p> <SubjectIcon/> Sobre o que vamos falar?</p>
                <Inputsubject type="text" name="subject" />
                <p><TextsmsIcon/> Qual é a mensagem?</p>
                <Textarea name="message"></Textarea>
                <Inputenviar type="submit" value="Enviar" />
                </Campos>
            </form>
        </Card>
        </>
    )
}

export default Email;