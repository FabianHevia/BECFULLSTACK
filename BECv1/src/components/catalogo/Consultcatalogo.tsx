import React from 'react';
import './Stylescatalogo.css';

const ConsultaCatalogo: React.FC = () => {
  return (
    <div>
      <h2 className="text-color-cc">Búsqueda de documentos</h2>
      <hr />

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle text-secondary mb-3"
                type="button"
                id="tipoDocumentoDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="mr-auto">Tipo de Documento</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="tipoDocumentoDropdown">
                <li><a className="dropdown-item" href="#" data-value="opcion1">Libros Técnicos</a></li>
                <li><a className="dropdown-item" href="#" data-value="opcion2">Libros Prácticos</a></li>
                <li><a className="dropdown-item" href="#" data-value="opcion3">Libros Divulgativos</a></li>
              </ul>
              <input type="hidden" name="tipoDocumento" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <div className="dropdown dropdownWrapperstyle">
                    <button className="btn btn-secondary dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="mr-auto">Categoría</span>
                    </button>
                    <ul className="dropdown-menu dropdownMenustyle" aria-labelledby="tipoDocumentoDropdown">
                        <li><a className="dropdown-item" href="#" data-value="opcion1">Ingenieria Informática</a></li>
                        <li><a className="dropdown-item" href="#" data-value="opcion2">Ingenieria Industrial</a></li>
                        <li><a className="dropdown-item" href="#" data-value="opcion3">Ingenieria en Sistemas</a></li>
                    </ul>
                    <input type="hidden" id="tipoDocumento" name="tipoDocumento" />
                </div>
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group mb-3 mt-2">
                <input type="text" className="form-control mt-4" id="titulo" placeholder="Título" />
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group mb-3 mt-2">
                <input type="text" className="form-control" id="autor" placeholder="Autor" />
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group mb-3 mt-2">
                <input type="text" className="form-control" id="tema" placeholder="Tema" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaCatalogo;