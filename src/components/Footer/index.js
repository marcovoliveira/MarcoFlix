import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} className="Logo" alt="Marcoflix logo" /> 
      </a>
    </FooterBase>
  );
}

export default Footer;
