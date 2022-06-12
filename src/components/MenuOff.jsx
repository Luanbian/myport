import { Link } from 'react-router-dom'
import { Text } from '../header/styleheader'
import {BarraOne, BarraTwo, MenuToggle, Container, List} from './menuStyled'

export function MenuOff(){
    return(
        <>
            <MenuToggle>
                <BarraOne></BarraOne>
                <BarraTwo></BarraTwo>
            </MenuToggle>

            <Container>
                <List>
                    <Link to="/about"> <Text> Sobre mim </Text> </Link>    
                    <Link to="/contact"> <Text> Contatos </Text> </Link>         
                    <Link to="/hability"> <Text> Habilidades </Text> </Link>   
                </List>
            </Container>
        </>
    )
}