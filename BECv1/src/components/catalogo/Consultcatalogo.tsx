import React from 'react';
import './Stylescatalogo.css';

const ConsultaCatalogo: React.FC = () => {
  return (
    <div>
      <h2 className="text-color-cc ms-2">Búsqueda de documentos</h2>
      <hr />

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div className="dropdown">
              <div className="ms-xxl-5 ms-xl-3 ms-lg-2 mb-xs-4">
                <button
                  className="btn btn-secondary dropdown-toggle text-secondary ms-md-5 mb-sm-4 position-relative start-50 translate-middle-x" style={{ backgroundColor: '#ffff', minWidth: '65%' }}
                  type="button"
                  id="tipoDocumento"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="mr-auto">Tipo de Documento</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="tipoDocumento" style={{ minWidth: '60%' }}>
                  <li><a className="dropdown-item d-flex align-items-center justify-content-center" href="#" data-value="opcion1">Libros Técnicos</a></li>
                  <li><a className="dropdown-item d-flex align-items-center justify-content-center" href="#" data-value="opcion2">Libros Prácticos</a></li>
                  <li><a className="dropdown-item d-flex align-items-center justify-content-center" href="#" data-value="opcion3">Libros Divulgativos</a></li>
                </ul>
                <input type="hidden" name="tipoDocumento" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="dropdown">
              <div className="me-xxl-5 me-xl-4 me-lg-3 me-md-1">
              <div className="me-xxl-5 me-xl-5 me-lg-5 me-md-5">
                <button
                  className="btn btn-secondary dropdown-toggle text-secondary me-xxl-5 mt-xs-2 position-relative start-50 translate-middle-x" style={{ backgroundColor: '#ffff', minWidth: '65%' }}
                  type="button"
                  id="tipoDocumento"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="mr-auto">Categoria</span>
                </button>
                  <ul className="dropdown-menu" aria-labelledby="tipoDocumento" style={{ minWidth: '55%' }}>
                    <li><a className="dropdown-item d-flex align-items-center justify-content-center" href="#" data-value="opcion1">Ingenieria Informática</a></li>
                    <li><a className="dropdown-item d-flex align-items-center justify-content-center" href="#" data-value="opcion2">Ingenieria Industrial</a></li>
                    <li><a className="dropdown-item d-flex align-items-center justify-content-center" href="#" data-value="opcion3">Ingenieria en Sistemas</a></li>
                  </ul>
                  <input type="hidden" name="tipoDocumento" />
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-3 mt-2 me-5 translate-middle-x position-relative start-50" style={{ maxWidth: '70%' }}>
            <input type="text" className="form-control mt-4" id="titulo" placeholder="Título" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-3 mt-2 me-5 translate-middle-x position-relative start-50" style={{ maxWidth: '70%'}}>
            <input type="text" className="form-control" id="autor" placeholder="Autor" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-3 mt-2 me-5 translate-middle-x position-relative start-50" style={{ maxWidth: '70%' }}>
            <input type="text" className="form-control" id="tema" placeholder="Tema" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaCatalogo;