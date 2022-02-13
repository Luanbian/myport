import React from "react";
import Imgerror from '../../styles/img/error/error.svg';
import {Imgfundo, Title, Content, Card} from './stylederro';
function Erro(){
    return(
        <>
            <Imgfundo src={Imgerror} alt="img-undraw-error"/>
            <Card>
                <Title>vish...</Title>
                <Content>Parece que você explorou bem longe,<br/> use o menu acima para voltar a navegar</Content>
            </Card>
        </>
    )
}

export default Erro;