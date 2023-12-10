import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar la pantalla de carga
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje
  const [message, setMessage] = useState('');

  const handleEmailChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(e.target.value);
  };

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleContactoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacto(e.target.value);
  };
  const handleRegistrar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    // Aquí puedes utilizar los valores de email y password
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Rut:', rut);
    console.log('Nombre:', nombre);
    console.log('contacto:', contacto);
   
    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', {
        nombre,
        rut,
        contacto,
        email,
        password,
      });

      // Aquí puedes manejar la respuesta del servidor
      console.log('Respuesta del servidor:', response.data);

      // Mostrar mensaje de éxito
      setMessage('Registro exitoso');
      setShowMessage(true);
    } catch (error) {

      setMessage('Error al registrar');
      setShowMessage(true);
      // Manejar errores en la solicitud
      console.error('Error:', error);
    } finally {
      // Ocultar la pantalla de carga después de un tiempo (por ejemplo, 2 segundos)
        setTimeout(() => {
        setLoading(false);
        setShowMessage(false);
      }, 2000);
    }
  };
  const handleInicioSesion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      // Obtener los datos del usuario de la API '/api/usuarios'
      const response = await axios.get('http://localhost:3000/api/usuarios');

      // Verificar si el email y la contraseña coinciden con los datos de la API
      const users = response.data;
      const user = users.find((user: any) => user.nombre === nombre && user.rut === rut && user.contacto === contacto && user.email === email && user.password === password);

      if (user) {
        console.log('¡Inicio de sesión exitoso para el usuario:', user.email);

        // Enviar confirmación de credenciales al endpoint '/api/sesion'
        /*await axios.post('http://localhost:3000/api/sesion', {
          email: user.email,
          password: user.password,
        });
        */
      } else {
        console.log('¡Credenciales incorrectas!');
        // Manejar credenciales incorrectas, por ejemplo, mostrar un mensaje al usuario.
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleInicioSesion}>
      <div className="row d-flex justify-content-center p-2 mt-5 mb-5">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-xs-12 col-sm-12 d-flex justify-content-center">
          <div className="animated-login shadow-2-strong rounded-4" style={{ backgroundColor: '#F0D2B9', minWidth: '75%', minHeight:'100%' }}>
            <div className="card-body p-4 text-center">
              <h2 className="mb-4 bold-text">Iniciar Sesión</h2>
              <hr></hr>
                <div className="form-outline mb-3">
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-4"
                    value={email} // Asignar el valor de email al campo
                    onChange={handleEmailChange1} // Manejar el cambio en el input
                  />
                </div>
                <div className="form-outline mb-2">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-4"
                    value={password} // Asignar el valor de password al campo
                    onChange={handlePasswordChange1} // Manejar el cambio en el input
                  />
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Recordar contraseña </label>
                </div>
                <button className="btn btn-primary btn-lg btn-block rounded-3" type="submit" style={{ color: 'white', backgroundColor: '#57412E', minWidth: '100%'}}>Iniciar Sesion</button>
                <hr className="mb-3" />
                <button className="btn btn-lg btn-block btn-primary rounded-3 mb-2" style={{ backgroundColor: '#dd4b39', minWidth: '100%' }} type="button" data-bs-toggle="modal" data-bs-target="#registroModal">
                  <i className="fab fa-google me-3 pt-2" style={{ minHeight: '36px' }}></i> Registrarse con Google
                </button>
            </div>
          </div>
        </div>
      </div>
    </form>

              <div className="modal fade" id="registroModal" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 d-flex mx-auto mt-5 mb-5" id="staticBackdropLabel" style={{ fontWeight: 'bold'}}>Registro</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {loading && <div className="loading-screen">Cargando...</div>}
                  {showMessage && (
                    <div className="message-container">
                      <p className={message.includes('Error') ? 'error-message' : 'success-message'}>{message}</p>
                    </div>
                  )}
                  {!loading && !showMessage && (
                    <form onSubmit={handleRegistrar}>
                      <div className="form-floating">
                      <p style={{ fontSize:'16px' }}>Ingresar Nombre Completo</p>
                          <input
                            type="text"
                            className="form-control form-control-lg rounded-4"
                            value={nombre} // Asignar el valor de email al campo
                            onChange={handleNombreChange} // Manejar el cambio en el input
                          />
                      </div>
                      <div className="form-floating">
                      <p style={{ fontSize:'16px' }}>Ingresar Rut</p>
                          <input
                            type="text"
                            className="form-control form-control-lg rounded-4"
                            value={rut} // Asignar el valor de email al campo
                            onChange={handleRutChange} // Manejar el cambio en el input
                          />
                      </div>
                      <div className="form-floating">
                      <p style={{ fontSize:'16px' }}>Ingresar Numero de Contacto</p>
                          <input
                            type="text"
                            className="form-control form-control-lg rounded-4"
                            value={contacto} // Asignar el valor de email al campo
                            onChange={handleContactoChange}
                          />
                      </div>
                      <div className="form-floating mb-3 mt-3">
                      <p style={{ fontSize:'16px' }}>Ingresar Correo electrónico</p>
                          <input
                            type="text"
                            className="form-control form-control-lg rounded-4"
                            value={email} // Asignar el valor de email al campo
                            onChange={handleEmailChange2} // Manejar el cambio en el input
                          />
                      </div>
                      <div className="form-floating mb-3">
                      <p style={{ fontSize:'16px' }}>Ingresar Contraseña</p>
                          <input
                            type="password"
                            className="form-control form-control-lg rounded-4"
                            value={password} // Asignar el valor de password al campo
                            onChange={handlePasswordChange2} // Manejar el cambio en el input
                          />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                      </div>
                      </form>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )};

export default Login;