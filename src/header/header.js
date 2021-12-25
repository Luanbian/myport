import React from "react";
import { Head, Ul, Li, Text} from './styleheader';
import { Link } from "react-router-dom";
import logo from '../img/principal/luan.png';

function Header(){
    return(
        <Head>
            <Ul>
                <Link to="/"> 
                    <img src={logo} alt="logo"/>
                </Link>
                <Li>                   
                    <Link to="/about"> <Text> Sobre mim </Text> </Link>                    
                </Li>
                <Li>                 
                   <Link to="/contact"> <Text> Contatos </Text> </Link>         
                </Li>
                <Li>                
                    <Link to="/hability"> <Text> Habilidades </Text> </Link>   
                </Li>
                <Li> 
                    <Link to="/certificate"> <Text> Certificados </Text> </Link>  
                </Li>
            </Ul>
        </Head>
    )
}

export default Header;