import React from 'react';

const Login: React.FC = () => {
  return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#F0D2B9' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5" style={{ fontWeight: 'bold' }}>Iniciar Sesión</h3>
                <div className="form-outline mb-4">
                  <label>Correo electrónico</label>
                  <input type="text" className="form-control form-control-lg" style={{ borderRadius: '10vh' }} />
                </div>
                <div className="form-outline mb-4">
                  <label>Contraseña</label>
                  <input type="password" className="form-control form-control-lg" style={{ borderRadius: '10vh' }} />
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Recordar contraseña </label>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ width: '300px', color: 'white', backgroundColor: '#8B4513', border: '1px' }}>Entrar</button>
                <hr className="my-5" />
                <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39', border: '1px' }} type="submit">
                  <i className="fab fa-google me-4"></i> Inicia sesión con Google
                </button>
                <br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;