import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="container">
    <div className="row d-flex justify-content-center align-items-center ms-5 p-2 mt-5 mb-5">
      <div className="ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-5 ms-sm-4 col-xxl-5 col-xl-6 col-lg-7 col-md-10">
        <div className="card shadow-2-strong rounded-4" style={{ backgroundColor: '#F0D2B9', minWidth: '85%' }}>
          <div className="card-body p-4 text-center">
            <h2 className="mb-4 bold-text">Iniciar Sesión</h2>
            <hr></hr>
            <div className="form-outline mb-3">
              <label>Correo electrónico</label>
              <input type="text" className="form-control form-control-lg rounded-4"/>
            </div>
            <div className="form-outline mb-2">
              <label>Contraseña</label>
              <input type="password" className="form-control form-control-lg rounded-4" />
            </div>
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" htmlFor="form1Example3"> Recordar contraseña </label>
            </div>
            <button className="btn btn-primary btn-lg btn-block rounded-3" type="submit" style={{ color: 'white', backgroundColor: '#57412E', minWidth: '100%'}}>Entrar</button>
            <hr className="mb-3" />
            <button className="btn btn-lg btn-block btn-primary rounded-3 mb-2" style={{ backgroundColor: '#dd4b39', minWidth: '100%' }} type="submit">
              <i className="fab fa-google me-3 pt-2" style={{ minHeight: '36px' }}></i> Inicia sesión con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Login;