import React from 'react';
import Rotas from './routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: sans-serif;
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