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
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const cardsWrapper = document.querySelector<HTMLElement>('.cards-wrapper');
      if (cardsWrapper && event.deltaY !== 0) {
        event.preventDefault();
        cardsWrapper.scrollLeft += event.deltaY;
      }
    };

    const handlePrevButtonClick = () => {
      const cardsWrapper = document.querySelector<HTMLElement>('.cards-wrapper');
      if (cardsWrapper) {
        cardsWrapper.scrollLeft -= 100;
      }
    };

    const handleNextButtonClick = () => {
      const cardsWrapper = document.querySelector<HTMLElement>('.cards-wrapper');
      if (cardsWrapper) {
        cardsWrapper.scrollLeft += 100;
      }
    };

    document.addEventListener('wheel', handleWheel);
    const prevButton = document.querySelector<HTMLElement>('.carousel-control-prev');
    const nextButton = document.querySelector<HTMLElement>('.carousel-control-next');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', handlePrevButtonClick);
      nextButton.addEventListener('click', handleNextButtonClick);
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
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
            <Card imageURL="URL_IMAGEN_1" altText="Descripción de la imagen 1" />
            <Card imageURL="URL_IMAGEN_2" altText="Descripción de la imagen 2" />
            <Card imageURL="URL_IMAGEN_3" altText="Descripción de la imagen 3" />
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


