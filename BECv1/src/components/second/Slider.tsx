import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styleslider.css';

const Card = ({ imageURL, altText }: { imageURL: string; altText: string }) => {
  return (
    <div className="card">
      <img src={imageURL} className="card-img-top" alt={altText} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">

        </p>
        <a href="#" className="btn btn-primary">
            
        </a>
      </div>
    </div>
  );
};

const Slider: React.FC = () => {
  const handlePrevButtonClick = () => {
    const cardsWrapper = document.querySelector<HTMLElement>('.cards-wrapper');
    if (cardsWrapper) {
      const scrollSpeed = 8; // Velocidad de desplazamiento
      const delay = 10; // Retraso entre cada cambio de posición

      const scroll = () => {
        const remainingScroll = Math.max(cardsWrapper.scrollLeft - scrollSpeed, 0);
        cardsWrapper.scrollLeft = remainingScroll;

        if (remainingScroll > 0) {
          setTimeout(scroll, delay);
        }
      };

      scroll();
    }
  };

  const handleNextButtonClick = () => {
    const cardsWrapper = document.querySelector<HTMLElement>('.cards-wrapper');
    if (cardsWrapper) {
      const scrollSpeed = 8; // Velocidad de desplazamiento
      const delay = 10; // Retraso entre cada cambio de posición

      const scroll = () => {
        const remainingScroll = Math.min(cardsWrapper.scrollLeft + scrollSpeed, cardsWrapper.scrollWidth - cardsWrapper.clientWidth);
        cardsWrapper.scrollLeft = remainingScroll;

        if (remainingScroll < cardsWrapper.scrollWidth - cardsWrapper.clientWidth) {
          setTimeout(scroll, delay);
        }
      };

      scroll();
    }
  };

  useEffect(() => {
    const prevButton = document.querySelector<HTMLElement>('.carousel-control-prev');
    const nextButton = document.querySelector<HTMLElement>('.carousel-control-next');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', handlePrevButtonClick);
      nextButton.addEventListener('click', handleNextButtonClick);
    }

    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener('click', handlePrevButtonClick);
        nextButton.removeEventListener('click', handleNextButtonClick);
      }
    };
  }, []);

  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cards-wrapper">
            <Card imageURL="CuentosDeOtono.webp" altText="Descripción de la imagen 1" />
            <Card imageURL="Elzorro.webp" altText="Descripción de la imagen 2" />
            <Card imageURL="MatarAunRuisenor.webp" altText="Descripción de la imagen 3" />
            <Card imageURL="CuentosDeOtono.webp" altText="Descripción de la imagen 1" />
            <Card imageURL="Elzorro.webp" altText="Descripción de la imagen 2" />
            <Card imageURL="MatarAunRuisenor.webp" altText="Descripción de la imagen 3" />
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Slider;


