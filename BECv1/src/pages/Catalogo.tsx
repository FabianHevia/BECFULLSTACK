import React from 'react';
import ConsultCatalogo from '../components/catalogo/Consultcatalogo';
import Docfound from '../components/catalogo/Docfound';

const CatalogoPage: React.FC = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-color">Usuario</h1>
          </div>
        </div>

      <div className="container" style={{ marginBottom: '5vh' }}>
        <div className="row">
          <ul className="nav nav-tabs" id="myTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active tabs-letter" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Consulta de catálogo</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link tabs-letter" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Documento encontrado</a>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#F0D2B9' }}>
            <div className="tab-content" id="myTabsContent">
              <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                <ConsultCatalogo />
              </div>
              <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
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

export default CatalogoPage;
