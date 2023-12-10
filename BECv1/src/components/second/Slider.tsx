import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styleslider.css';
import { Link } from 'react-router-dom';

const LocationState= {
  id: '12345',
  titulo: 'El Origen de las Especies',
  autor: 'Angelica',
  tipo: 'Novela',
  categoria: 'Libro Teórico',
  img: 'El_Origen_de_las_Especies.jpg'}

const Card2 = ({ imageURL, title }: { imageURL: string; title: string; }) => {
  const handleClick = () => {
    window.scrollTo(0, 10); // Scroll hacia arriba al hacer clic
  };
  return (
    <div className="card2 head-slider">
      <img src={imageURL} className="card-img-top"/>
      <div className="card-body body-slider d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        </p>
        <Link to='/reservas' state= { LocationState } className="btn btn-primary" onClick={handleClick}>Reservar</Link>
      </div>
    </div>
  );
};

const Slider: React.FC = () => {
  const handlePrevButtonClick = () => {
    const cardsWrapper = document.querySelector<HTMLElement>('.cards2-wrapper');
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
    const cardsWrapper = document.querySelector<HTMLElement>('.cards2-wrapper');
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
          <div className="cards2-wrapper">
            <Card2 imageURL="CuentosDeOtono.webp" title="Cuentos De Otoño" />
            <Card2 imageURL="Elzorro.webp" title="El Zorro en el bosque"/>
            <Card2 imageURL="MatarAunRuisenor.webp" title="Matar a un ruiseñor" />
            <Card2 imageURL="NaranjaMecanica.jpg" title="La Naranja Mecanica" />
            <Card2 imageURL="HerederadeFuego.webp" title="Heredera de Fuego" />
            <Card2 imageURL="Atlantis.jpg" title="Atlantis"/>
            <Card2 imageURL="Atoeas.jpg" title="A Teaspoon of Earth and Sea" />
            <Card2 imageURL="libro-imprenta-lima.jpg" title="Los hombres del norte"/>
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


