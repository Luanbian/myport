import React from 'react';
import {Card, Title, Inputname, Inputenviar, Inputemail, Textarea, Campos} from './emailstyled';
import PersonIcon from '@material-ui/icons/Person';
import TextsmsIcon from '@material-ui/icons/Textsms';
import EmailIcon from '@material-ui/icons/Email';

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
                        <p> <EmailIcon/>Me diga o seu e-mail</p>
                        <Inputemail type="text" name="email"/>
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