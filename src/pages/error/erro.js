import React from "react";
import Imgerror from '../../styles/img/error/error.png';
import {Imgfundo, Title, Content, Saida, Clique, Card} from './stylederro';
import { Link } from "react-router-dom";
function Erro(){
    return(
        <>
            <Imgfundo src={Imgerror} alt="img-undraw-error"/>
            <Card>
                <Title>vish...</Title>
                <Content>Parece que você explorou bem longe</Content>
                <Saida>Sem problemas, você pode voltar a explorar o site sem medo</Saida>
                <Link to="/">
                    <Clique>Clique aqui para voltar a pagina principal</Clique>
                </Link>
            </Card>
        </>
    )
}

export default Erro;