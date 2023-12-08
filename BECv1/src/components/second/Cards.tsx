import React from 'react';
import './Stylecards.css';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

interface CardAnimate {
  link?: string;
  title: string;
  messageButton?: string;
  information?: string;
}

const Cards: React.FC<CardAnimate> = ({
  link = '',
  title,
  messageButton = 'Reservar',
  information = '',
}: CardAnimate) => {
  const cardClass = `card`;

  return (
    <div className={cardClass}>
      <img className="card-img-top card-img-top-s" src={link} alt="Card image"/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{information}</p>
        {/* Utiliza Link para redireccionar a la página de "reservas" */}
        <Link to="/reservas" className="btn btn-primary">{messageButton}</Link>
      </div>
    </div>
  );
};

export default Cards;
