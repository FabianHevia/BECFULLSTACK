import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes utilizar los valores de email y password
    console.log('Email:', email);
    console.log('Password:', password);
    // Puedes hacer la lógica de autenticación aquí o enviar los datos al servidor
  };
  return (
    <div className="container">
<<<<<<< Updated upstream
    <div className="row d-flex justify-content-center align-items-center ms-5 p-2 mt-5 mb-5">
      <div className="ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-5 ms-sm-4 col-xxl-5 col-xl-6 col-lg-7 col-md-10">
        <div className="card shadow-2-strong rounded-4" style={{ backgroundColor: '#F0D2B9', minWidth: '85%' }}>
          <div className="card-body p-4 text-center">
            <h2 className="mb-4 bold-text">Iniciar Sesión</h2>
            <hr></hr>
            <div className="form-outline mb-3">
              <label>Correo electrónico</label>
              <input type="text" className="form-control form-control-lg rounded-4"/>
=======
      <div className="row d-flex justify-content-center p-2 mt-5 mb-5">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-xs-12 col-sm-12 d-flex justify-content-center">
          <div className="animated-login shadow-2-strong rounded-4" style={{ backgroundColor: '#F0D2B9', minWidth: '75%' }}>
            <div className="card-body p-4 text-center">
              <h2 className="mb-4 bold-text">Iniciar Sesión</h2>
              <hr></hr>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-3">
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-4"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-outline mb-2">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-4"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Recordar contraseña </label>
                </div>
                <button className="btn btn-primary btn-lg btn-block rounded-3" type="submit" style={{ color: 'white', backgroundColor: '#57412E', minWidth: '100%'}}>Entrar</button>
              </form>
              <hr className="mb-3" />
              <button className="btn btn-lg btn-block btn-primary rounded-3 mb-2" style={{ backgroundColor: '#dd4b39', minWidth: '100%' }} type="submit">
                <i className="fab fa-google me-3 pt-2" style={{ minHeight: '36px' }}></i> Inicia sesión con Google
              </button>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;