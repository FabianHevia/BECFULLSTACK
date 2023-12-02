import React from 'react';
import './Noticias.css';

interface NoticiaProps {
  titulo: string;
  resumen: string;
  fecha: string;
}
const Noticia: React.FC<NoticiaProps> = ({ titulo, resumen, fecha }) => {
  return (
    <div className="d-flex justify-content-center container rounded-5 border border-black border-opacity-50 mb-3 animated" style={{ backgroundColor:'#F0D2B9', maxWidth:'50%'  }}>
        <div className="row" style={{ gap: '10%', minWidth: '103%' }}>
            <div className="fecha col-1 rounded-start-5" style={{ backgroundColor:'#2f2321' }}>{fecha}</div>
            <div className="col-9">
                <h2 className="titulo mt-2 mb-3 me-xxl-5 me-xl-5 me-lg-5 me-md-5">{titulo}</h2>
                <p className="resumen mt-2 me-xxl-5 me-xl-5 me-lg-5 me-md-5">{resumen}</p>
            </div>
        </div>
    </div>
  );
};
interface NoticiasProps {
  noticias: NoticiaProps[];
}

const Noticias: React.FC<NoticiasProps> = ({ noticias }) => {
  return (
    <div className="noticias-container position-relative">
      {noticias.map((noticia, index) => (
        <Noticia
          key={index}
          titulo={noticia.titulo}
          resumen={noticia.resumen}
          fecha={noticia.fecha}
        />
      ))}
    </div>
  );
};

export default Noticias;
