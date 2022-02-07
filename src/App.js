import React from 'react';
import Rotas from './routes';
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: sans-serif;
    }
    canvas { 
        width: 100%; 
        height: 100%; 
        border-radius: 22px;
    }
`;

function App(){
    AOS.init();
    return (
        <>
            <Rotas/>
            <GlobalStyle/>
        </>
    )
}

export default App;