import React from 'react';

const Reservas: React.FC = () => {
  return (
      <div className="row m-6">
        <div className="mt-5"></div>
        <div className="container py-5">
          <div className="align-items-center">
            <div className="d-flex justify-content-center">
              <div className="card shadow-2-strong" style={{ borderRadius: '2vh' }}>
                <div className="card-body p-5 text-center" style={{ backgroundColor: '#F0D2B9', borderRadius: '15px' }}>
                  <h3 className="mb-5">Reservar Libro</h3>
                  <div className="form-outline mb-3">
                    <label className="mt-5 form-label" htmlFor="ingresarID">Ingrese el ID aquí</label>
                    <input
                      type="number"
                      id="ingresarID"
                      className="form-control form-control-lg"
                      style={{ borderRadius: '2vh' }}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{ width: '100%', color: 'white', backgroundColor: '#8B4513', border: '2vh' }}>Solicitar</button>
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