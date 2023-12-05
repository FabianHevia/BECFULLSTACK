import React from 'react';
import Docfound from '../components/catalogo/DocumentoEncontrado';
import './Catalogo.css';

const CatalogoPage: React.FC = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-color">Usuario</h1>
          </div>
        </div>

      <div className="container" style={{ marginBottom: '50px' }}>
        <div className="row">
          <ul className="nav nav-tabs" id="myTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active nav-tabs" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false" style={{ backgroundColor: '#F0D2B9'}}>Documento encontrado</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="animated-catalogo shadow-2-strong" style={{ borderRadius: '1vh', backgroundColor: '#F0D2B9' }}>
            <div className="tab-content" id="myTabsContent">
              <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                <Docfound />
              </div>
            </div>
            <hr />
      
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CatalogoPage;
