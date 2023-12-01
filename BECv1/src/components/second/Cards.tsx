import React from 'react';
import './Stylecards.css';

interface CardAnimate {
  link?: string;
  title: string;
  messageButton?: string;
  information?: string;
}
const Cards: React.FC<CardAnimate> = ({
  link = '',
  title,
  messageButton = 'Enter',
  information = '',
}: CardAnimate) => {
  const cardClass = `card`;

  return (
    <div className={cardClass}>
      <img className="card-img-top" src={link} alt="Card image"/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{information}</p>
        <button className="btn btn-primary">{messageButton}</button>
      </div>
    </div>
  );
};
export default Cards;
