import React from 'react';
import Docfound from '../components/catalogo/Docfound';
import './Catalogo.css';

const Usuario: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-color">Usuario</h1>
        </div>
      </div>
      <div className="container" style={{ marginBottom: '5vh' }}>
        <div className="row">
          <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#F0D2B9' }}>
            <div className="tab-content" id="myTabsContent">
              <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                <Docfound />
              </div>
            </div>
            <hr />
            <div className="mt-2 text-center">
              <div className="btn-container">
                <button className="btn btn-primary btn-custom" style={{ backgroundColor: '#8B4513', borderColor: '#8B4513' }}>Volver</button>
              </div>
              <div className="my-2"></div>
              <div className="btn-container">
                <button className="btn btn-secondary btn-custom" style={{ backgroundColor: '#8B4513', borderColor: '#8B4513' }}>Aplicar Filtros</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Usuario;