import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Marcoflix logo" /> 
            </a>
            <Button as="a" className="ButtonLink" href="/">
                New video
            </Button> 
        </nav>
    )
}

export default Menu;