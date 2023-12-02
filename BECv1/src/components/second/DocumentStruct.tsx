// DocumentStruct.tsx
import React from 'react';

interface DocumentData {
  title: string;
  author: string;
  type: string;
  category: string;
}

interface DocumentStructProps {
  documents: DocumentData[];
}

const DocumentStruct: React.FC<DocumentStructProps> = ({ documents }) => {
  return (
    <div className="container mt-3">
      <div className="table-responsive" style={{ maxHeight: '300px' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Tipo</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index}>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.type}</td>
                <td>{doc.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentStruct;
