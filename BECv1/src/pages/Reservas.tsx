import React from 'react';

const Reservas: React.FC = () => {
  return (
      <div className="row m-0">
        <div className="m-5"></div>
        <div className="m-5"></div>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5 text-center" style={{ backgroundColor: '#F0D2B9', borderRadius: '15px' }}>
                  <h3 className="mb-5">Reservar Libro</h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="ingresarID">Ingrese el ID aquí</label>
                    <input
                      type="number"
                      id="ingresarID"
                      className="form-control form-control-lg"
                      style={{ borderRadius: '10vh' }}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{ width: '300px', color: 'white', backgroundColor: '#8B4513', border: '1px' }}>Solicitar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5"></div>
        <div className="m-5"></div>
        <div className="m-5"></div>
        <div className="m-3"></div>
      </div>
  );
};

export default Reservas;