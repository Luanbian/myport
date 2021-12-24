import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/principal/home';
import About from './pages/about/about';
import Header from './header/header';
import Certificate from './pages/certificate/certificate';
import Hability from './pages/habilits/hability';
import Contact from './pages/contact/contact';
import Erro from './pages/error/erro';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/certificate" element={<Certificate/>} />
                <Route exact path="/hability" element={<Hability/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;