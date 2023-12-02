import React from 'react';
import './Reservas.css';

const Reservas: React.FC = () => {
  return (
    <div className="row md-6">
      <div className="container mb-5 mt-5">
        <div className="align-items-center">
          <div className="d-flex justify-content-center">
            <div className="card shadow-2-strong rounded-4">
              <div className="border border-black border-top-0 border-start-0 border-end-0 border-opacity-75 border-3 rounded-4">
                <div className="card-body p-4 text-center">
                  <h3 className="bold-text">Reservar Libro</h3>
                  <hr></hr>
                    <div className="form-outline mb-3">
                      <label className="mt-3 form-label" htmlFor="ingresarID">Ingrese el ID aquí</label>
                      <input
                        type="number"
                        id="ingresarID"
                        className="form-control form-control-lg rounded-4" />
                    </div>
                    <div className="mb-5">
                    </div>
                    <hr></hr>
                    <button
                      className="btn btn-primary btn-lg btn-block mt-1 rounded-3"
                      type="submit"
                      style={{ width: '100%', color: 'white', backgroundColor: '#57412E' }}>Solicitar</button>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5"></div>
        <div className="mt-5"></div>
        <div className="mt-5"></div>
      </div>
  );
};

export default Reservas;