// DocumentoEncontrado.tsx
import React from 'react';
import DocumentStruct from '../second/DocumentStruct';

const DocumentoEncontrado: React.FC = () => {
  const documents = [
    {
      title: 'Ingeniería de Software',
      author: 'Martin Miranda',
      type: 'Libro Técnico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería de Software',
      author: 'Christian Carrasco',
      type: 'Libro Técnico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería Civil Informática',
      author: 'Gabriel Carrasco',
      type: 'Libro Teorico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería Civil Informática',
      author: 'Gabriel Carrasco',
      type: 'Libro Teorico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería Civil Informática',
      author: 'Gabriel Carrasco',
      type: 'Libro Teorico',
      category: 'Ingeniería Informática',
    },

  ];

  return (
    <div>
        <h2 className="text-color-cc ms-5">Búsqueda de documentos
        <img
            src="/carrito-de-compras.png"
            alt="Icono Carrito de Compras"
            className="position-relative start-50 ms-5"
            style={{ width: '50px', height: '48px'}}
          />
        </h2>
        <hr />
        <DocumentStruct documents={documents} />
    </div>
  );
};

export default DocumentoEncontrado;

