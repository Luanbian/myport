import React from "react";
import { Head, Ul, Li, Button } from './styleheader';

function Header(){
    return(
        <Head>
            Aqui é o header
            <Ul>
                <Li>
                    <Button>
                        Sobre mim
                    </Button>
                </Li>
                <Li>
                    <Button>
                        Contatos
                    </Button>    
                </Li>
                <Li>
                    <Button>
                        Habilidades
                    </Button>
                </Li>
                <Li>
                    <Button>
                        Certificados
                    </Button>
                </Li>
            </Ul>


        </Head>
    )
}

export default Header;