import { useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";

import Logo from '../../assets/Logo.svg'

export function Header(){

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return(
    <header>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        
        <div className="nav-container">

          <img src={Logo} className="logo-header"/>

          <div className="menu-icon" onClick={toggleNavbar}>

            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>

          </div>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link>Sobre mim</Link></li>
            <li><Link>Serviços</Link></li>
            <li><Link>Projetos</Link></li>
            <li><Link>Tecnologias</Link></li>
          </ul>

        </div>
      </nav>
    </header>
  )
};