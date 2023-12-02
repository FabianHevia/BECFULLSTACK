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
    // Agrega más elementos si es necesario
  ];

  return (
    <div>
      <h2 className="text-color-cc ms-2">Búsqueda de documentos</h2>
      <hr />
      <DocumentStruct documents={documents} />
    </div>
  );
};

export default DocumentoEncontrado;

