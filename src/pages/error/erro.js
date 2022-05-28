import React from "react";
import Imgerror from '../../styles/img/error/error.svg';
import {Imgfundo, Title, Description, Content} from './stylederro';
import {BackHead} from '../contact/emailstyled';
function Erro(){
    return(
        <>
           <BackHead></BackHead> 
           <Content>
            <Imgfundo src={Imgerror} alt="img-undraw-error"/>
            <div>
                <Title>vish...</Title>
                <Description>
                    Parece que você explorou bem longe,<br/> 
                    use o menu acima para voltar a navegar
                </Description>
            </div>
            </Content>
        </>
    )
}

export default Erro;