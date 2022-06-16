import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='Error404'>
            <Header />
            <div className='error404section'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/">
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error404;