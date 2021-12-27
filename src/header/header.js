import React from "react";
import { Head, Ul, Li, Text, Imglogo} from './styleheader';
import { Link } from "react-router-dom";
import logo from '../styles/img/principal/luan.png';
function Header(){
    return(
        <Head>
            <Ul>
                <Li>
                    <Link to="/">  <Imglogo src={logo} alt="logo"/> </Link>
                </Li>
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
    );
}

export default Header;