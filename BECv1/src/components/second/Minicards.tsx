import { Link } from 'react-router-dom';
import './Minicards.css';

interface InterCard {
    id: string;
    titulo: string;
    autor: string;
    tipo?: string;
    categoria?: string;
    img: string;
    }
    
    const MIniIMG: React.FC<InterCard> = ({
      id='',
      titulo = '',
      autor,
      tipo = '',
      categoria,
      img = '',
    }: InterCard) => {
      const miniCards = `cards2`;
  
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
      <div className={miniCards}>
        <img src={img} className="card-img-top"/>
        <div className="card-body body-slider d-flex flex-column justify-content-between">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
          </p>
          <Link to='/reservas' state= {reservationState} className="btn btn-primary" onClick={handleClick}>Reservar</Link>
        </div>
      </div>
    );
  };

  export default MIniIMG;