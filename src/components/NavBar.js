import React, { useState, useEffect } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import './navBarStyle.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <div className={`navbar ${scrolling ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className={`logo ${scrolling ? 'white-text' : ''}`}>
          <a href="#">Lucas <span>Santos</span></a>
        </div>
        <ul className={`menu ${scrolling ? 'white-text' : ''} ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick} >Início</a></li>
          <li><a href="#about" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#project" onClick={handleLinkClick}>Projetos</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        </ul>
        <div className={`menu-btn ${scrolling ? 'white-icon' : ''}`} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ?  <AiOutlineClose/> : <AiOutlineMenu />}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
