import React from 'react';
import '.Stylescatalogo.css';

const DocumentoEncontrado: React.FC = () => {
  return (
    <div>
      <h2 className="text-color-df">Búsqueda de documentos</h2>
      <hr />

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
              <tr>
                <td>Ingeniería de Software</td>
                <td>Martin Miranda</td>
                <td>Libro Técnico</td>
                <td>Ingeniería Informática</td>
              </tr>
              <tr>
                <td>Ingeniería de Software</td>
                <td>Christian Carrasco</td>
                <td>Libro Técnico</td>
                <td>Ingeniería Informática</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentoEncontrado;