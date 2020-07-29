import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button';
import { Link } from "react-router-dom";


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Marcoflix logo" /> 
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video">
                New video
            </Button> 
        </nav>
    )
}

export default Menu;