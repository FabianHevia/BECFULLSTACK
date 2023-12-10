import React from 'react';
import './Stylecards.css';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

interface CardAnimate {
  id: string;
  titulo: string;
  autor: string;
  tipo?: string;
  categoria?: string;
  img: string;
}

const Cards: React.FC<CardAnimate> = ({
  id='',
  titulo = '',
  autor,
  tipo = '',
  categoria,
  img = '',
}: CardAnimate) => {
  const cardClass = `card`;

  const handleClick = () => {
    window.scrollTo(0, 10); // Scroll hacia arriba al hacer clic
  };

  const reservationState = {
    id,
    titulo,
    autor,
    tipo,
    categoria,
    img,
  };

  return (
    <div className={cardClass}>
      <img className="card-img-top card-img-top-s" src={img} alt="Card image" />
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{autor}</p>
        {/* Utiliza Link para redireccionar a la página de "reservas" */}
        <Link
          to={'/reservas'}
          state={reservationState}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Reservar
        </Link>
      </div>
    </div>
  );
};

export default Cards;
