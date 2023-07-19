import React, { useState, useEffect, useRef } from "react";
import './aboutStyle.css';
import profileImage from '../Image/img-1.jpg';

const About = () => {
  const texts = ["Desenvolvedor Full-Stack"];
  const [typingText, setTypingText] = useState("");
  const [index, setIndex] = useState(0);
  const [typingAnimation, setTypingAnimation] = useState(true);
  const countRef = useRef(0);

  useEffect(() => {
    let timer;

    const type = () => {
      const text = texts[index];
      setTypingText((prev) => text.substring(0, countRef.current));

      if (typingAnimation) {
        countRef.current += 1;
      } else {
        countRef.current -= 1;
      }

      if (countRef.current > text.length || countRef.current < 0) {
        setTypingAnimation((prev) => !prev);
      }
    };

    timer = setInterval(type, 100);

    return () => clearInterval(timer);
  }, [index, typingAnimation]);

  useEffect(() => {
    setTypingAnimation(true);

    const animationDuration = 5000;
    const animationTimeout = setTimeout(() => {
      setTypingAnimation(false);
    }, animationDuration);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">Sobre</h2>
        <div className="about-content">
          <div className="column left">
            <img className="img-profile" src={profileImage} alt="Profile" />
          </div>
          <div className="column right">
            <div className="text">Sou Lucas e sou <span className="typing-2">{typingText}</span></div>
            <p>Me chamo Lucas, tenho 27 anos. Sou de Aracaju-SE, venho da área da construção civil, sou formado em Técnico de Edificações desde 2016 e dei início aos estudos na área da programação no ano de 2021, foi quando entrei na Trybe e hoje sou formado em desenvolvimento Web Full-Stack.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
