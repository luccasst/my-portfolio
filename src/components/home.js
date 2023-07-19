import React, { useState, useEffect, useRef } from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import "./homeStyle.css";

const Home = () => {
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
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Olá, meu nome é</div>
          <div className="text-2">Lucas Santos</div>
          <div className="text-3">
            e eu sou <span className="typing">{typingText}</span>
          </div>
        </div>
        <div className="icons">
          <div className="row">
            <a href="https://www.linkedin.com/in/lucas-santos-80033b229/" target="_blank">
              <AiFillLinkedin name="logo-linkedin" className="linkedin-icon"></AiFillLinkedin>
            </a>
          </div>
          <div className="row">
            <a href="https://github.com/luccasst" target="_blank">
              <BsGithub name="logo-github" className="github-icon"></BsGithub>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="#">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
