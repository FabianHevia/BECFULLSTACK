import React from 'react';
import './Noticias.css';

interface NoticiaProps {
  titulo: string;
  resumen: string;
  fecha: string;
}
const Noticia: React.FC<NoticiaProps> = ({ titulo, resumen, fecha }) => {
  return (
    <div className="animated mx-auto rounded-5 border border-black border-opacity-50 mb-3" style={{ backgroundColor:'#F0D2B9', maxWidth:'90%'  }}>
        <div className="row" style={{ gap: '10%', minWidth: '103%' }}>
            <div className="col-12">
                <h2 className="titulo mt-2 mb-3 mx-auto" style={{ maxWidth:'90%' }}>{titulo}</h2>
                <p className="resumen mt-2 mx-auto" style={{ maxWidth:'90%' }}>{resumen}</p>
                <p className="fecha mx-aut">{fecha}</p>
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
    <div>
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

export { Noticias };
