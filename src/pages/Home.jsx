import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-content">
            <h1>Seja bem-vindo ao inventário de produtos e clientes</h1>
            <p>Escolha qual categoria deseja gerenciar: </p>
            <div className="buttons">
                
                <div className="nav-button">
                    <NavLink to="/produtos" exact activeClassName="active">
                        Produtos
                    </NavLink>
                </div>
                <div className="nav-button">
                    <NavLink to="/clientes" exact activeClassName="active">
                        Clientes
                    </NavLink>
                </div>                
            </div>
        </div>

    );
};

export default Home;