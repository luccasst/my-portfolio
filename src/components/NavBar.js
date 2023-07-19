import React, { useState, useEffect } from "react";
import './navBarStyle.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <div className={`navbar ${scrolling ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className={`logo ${scrolling ? 'white-text' : ''}`}>
          <a href="#">Lucas <span>Santos</span></a>
        </div>
        <ul className={`menu ${scrolling ? 'white-text' : ''}`}>
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#project">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
        <div className={`menu-btn ${scrolling ? 'white-icon' : ''}`}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
