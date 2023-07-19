import React, { useState } from "react";
import bnImage from '../Image/bn-home.jpeg';
import bnContact from '../Image/bn-contact.jpeg';
import homeCall from '../Image/homecall.jpeg';
import call from '../Image/call.jpeg';
import login from '../Image/login.png';
import homeDelivery from '../Image/home.delivery.png';
import setDireita from '../Image/seta-direita.png';

import './projectStyle.css';

const images = [
  bnImage,
  bnContact,
  homeCall,
  call,
  login,
  homeDelivery
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="projectSection" id="project">
      <h2 className="ProjectTitle">Projetos desenvolvidos</h2>
    <div className="container-slider">
      <button id="prev-button" onClick={goToPrevImage}>
        <img src={setDireita} alt="prev-button" />
      </button>
      <div className="container-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className={`slider ${index === currentIndex ? 'on' : ''}`}
          />
        ))}
      </div>
     
      <button id="next-button" onClick={goToNextImage}>
        <img src={setDireita} alt="next-button" />
      </button>
    </div>
    </section>
  );
};

export default Project;
