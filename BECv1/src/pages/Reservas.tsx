import React, { useState } from 'react';
import './Reservas.css';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownCalendario from '../components/second/Calendar';
import axios from 'axios';

import { generarCodigoAleatorio } from '../server/controller/reservaCode';

const Reservas: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [ingresarID, setIngresarID] = useState<string>('');

  const handleReservaClick = async () => {
    if (selectedDate && ingresarID) {
      let fechaReserva = selectedDate.toISOString(); // Obtener la fecha en formato ISO
      let idCompra = generarCodigoAleatorio(); // Generar un ID aleatorio inicial
      
      console.log('bookID:', ingresarID);
      console.log('deliveryDate:', fechaReserva);
      console.log('requestType:', idCompra);
      
      try {
        // Guardamos la reserva utilizando el idCompra único generado
        await axios.post('http://localhost:3000/api/reservas', {
          bookID: ingresarID,
          deliveryDate: fechaReserva,
          requestType: idCompra,
        });
        
        console.log('Reserva exitosa:', idCompra);
      } catch (error) {
        console.error('Error al hacer la reserva:', error);
      }
    } else {
      console.log('Selecciona una fecha e ingresa un ID antes de reservar.');
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  
  const handleIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngresarID(event.target.value);
  };
  

  return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-5 mt-5">
            <div className="position-relative start-50 ms-xxl-5 ms-xl-5 ms-sm-5 translate-middle-x">
            <div className="ms-xxl-5 ms-xl-5 ms-lg-5 ms-sm-4">
            <div className="ms-xxl-5 ms-xl-5 ms-lg-5">
            <div className="card shadow-2-strong rounded-4 ms-xxl-5">
              <div className="border border-black border-top-0 border-start-0 border-end-0 border-opacity-75 border-3 rounded-4">
                <div className="card-body p-4 text-center">
                  <h3 className="bold-text">Reservar Libro</h3>
                  <hr />
                  <div className="form-outline mb-3">
                    <label className="mt-4 form-label" htmlFor="ingresarID">Ingrese el ID aquí</label>
                    <input
                      type="number"
                      id="ingresarID"
                      className="form-control form-control-lg rounded-4"
                      value={ingresarID}
                      onChange={handleIDChange}
                    />
                  </div>
                  <hr />
                  <div className="mt-1">
                    <p>Seleccione la fecha de entrega</p>
                    <DropdownCalendario onDateChange={handleDateChange}/>
                  </div>
                  <hr />
                  <button
                    className="btn btn-primary btn-lg btn-block mb-1 mt-1 rounded-3"
                    type="submit"
                    style={{ width: '100%', color: 'white', backgroundColor: '#57412E' }}
                    onClick={handleReservaClick}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="mb-5">
          </div>
          </div>
          
          
          {/* Segundo elemento de reserva */}
          <div className="col-md-6 mb-5 mt-5">
            <div className="ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-5 ms-sm-5 position-relative start-50 translate-middle-x">
            <div className="ms-xxl-5 ms-lg-5 ms-sm-4 card shadow-2-strong rounded-4">
              <div className="border border-black border-top-0 border-start-0 border-end-0 border-opacity-75 border-3 rounded-4">
                <div className="card-body p-4 text-center">
                  <h3 className="bold-text">Solicitar Prestamo</h3>
                  <hr />
                  <div className="form-outline mb-3">
                    <label className="mt-4 form-label" htmlFor="ingresarID2">Ingrese el ID aquí</label>
                    <input
                      type="number"
                      id="ingresarID2"
                      className="form-control form-control-lg rounded-4"
                    />
                  </div>
                  <hr />
                  <button
                    className="btn btn-primary btn-lg btn-block mt-1 rounded-3"
                    type="submit"
                    style={{ width: '100%', color: 'white', backgroundColor: '#57412E' }}
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="mb-5"></div>
    </div>
    <div className="mb-5"></div>
    </div>
  );
};

export default Reservas;