import React from 'react';
import './Stylecards.css';

interface CardAnimate {
  link?: string;
  title: string;
  messageButton?: string;
  information?: string;
  animated?: boolean; // Bandera para determinar si se debe aplicar animación
}
const Cards: React.FC<CardAnimate> = ({
  link = '',
  title,
  messageButton = 'Enter',
  information = '',
  animated = false,
}: CardAnimate) => {
  const cardClass = `card ${animated ? 'shadow' : ''}`;

  return (
    <div className={cardClass} style={animated ? { width: '300px' } : {}}>
      <img className="card-img-top" src={link} alt="Card image" style={{ width: '100%' }} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{information}</p>
        <button className="btn btn-primary">{messageButton}</button>
      </div>
    </div>
  );
};
export default Cards;
