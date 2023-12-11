import React from 'react';
import './DocumentStruct.css';
import { DocumentData } from '../catalogo/DocumentData';
import { Link } from 'react-router-dom';


interface DocumentStructProps {
  documents: DocumentData[];
}

interface DocumentDataReserva {
  id: string;
  titulo: string;
  autor: string;
  tipo: string;
  categoria: string;
  img: string;
}

const DocumentStruct: React.FC<DocumentStructProps> = ({ documents }) => {
  const handleClick = () => {
    window.scrollTo(0, 10); // Scroll hacia arriba al hacer clic
  };

  const convertToDocumentDataReserva = (doc: DocumentData): DocumentDataReserva => {
    return {
      id: doc._id,
      titulo: doc.title,
      autor: doc.author,
      tipo: doc.type,
      categoria: doc.category,
      img: doc.img,
    };
  };
  
  return (
    <div className="container mt-4 mb-2">
      <div className="table-responsive rounded-4 border border-3 border-black border-opacity-75" style={{ maxHeight: '300px', backgroundColor: '#ffff' }}>
        <table className="table table-bordered border-black border-opacity-25">
          <thead>
            <tr>
              <th className="text-center">Título</th>
              <th className="text-center">Autor</th>
              <th className="text-center">Tipo</th>
              <th className="text-center">Categoría</th>
              <th className="text-center">Reservar</th> {/* Columna para los botones */}
            </tr>
          </thead>
          <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td className="text-center">{doc.title}</td>
              <td className="text-center">{doc.author}</td>
              <td className="text-center">{doc.type}</td>
              <td className="text-center">{doc.category}</td>
              <td className="text-center">
              <Link
                to='/reservas'
                state= {
                convertToDocumentDataReserva(doc)
                }
                className="btn btn-primary"
                onClick={handleClick}
                >Reservar</Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentStruct;