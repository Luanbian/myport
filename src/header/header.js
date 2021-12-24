import React from "react";
import { Head, Ul, Li} from './styleheader';
import { Link } from "react-router-dom";

function Header(){
    return(
        <Head>
            Aqui é o header
            <Ul>
                <Li>                   
                    <Link to="/about"> Sobre mim </Link>                    
                </Li>
                <Li>                 
                   <Link to="/contact"> Contatos </Link>         
                </Li>
                <Li>                
                    <Link to="/hability"> Habilidades </Link>   
                </Li>
                <Li> 
                    <Link to="/certificate"> Certificados </Link>  
                </Li>
            </Ul>
        </Head>
    )
}

export default Header;