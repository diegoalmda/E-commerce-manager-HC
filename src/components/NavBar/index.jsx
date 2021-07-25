import React from 'react';
import logo from '../../assets/tech.png';
import { NavLink, Link } from 'react-router-dom';


function NavBar() {
    return(
        <nav className="navigation">
            <div className="logo">
                <img src={logo} alt="Logotipo" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                <NavLink to="/" exact activeClassName="active">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/produtos" exact activeClassName="active">
                    Produtos
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/clientes" exact activeClassName="active">
                    Clientes
                </NavLink>
                </li>
            </ul>
            <div className="social-icons">
                
            </div>
        </nav>
    )
}

export default NavBar;