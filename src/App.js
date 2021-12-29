import React from 'react';
import Rotas from './routes';
import { createGlobalStyle } from 'styled-components';

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
    return (
        <>
            <Rotas/>
            <GlobalStyle/>
        </>
    )
}

export default App;