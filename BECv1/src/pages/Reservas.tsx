import React, { useState } from 'react';
import './Reservas.css';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownCalendario from '../components/second/Calendar';

const Reservas: React.FC = () => {
  const [bookID, setBookID] = useState<number | string>('');
  const [requestType, setRequestType] = useState<string>('');

  const handleReserve = async () => {
    try {
      const data = { bookID, requestType };
      const response = await fetch('/api/reservar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Reserva exitosa');
        // Aquí puedes agregar lógica adicional luego de una reserva exitosa
      } else {
        console.error('Error al realizar la reserva');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud: ', error);
    }
  };

  const handleBookIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookID(e.target.value);
  };

  const handleBorrowRequest = async () => {
    // Lógica para la solicitud de préstamo
    try {
      const data = { bookID }; // Solo se requiere el bookID para la solicitud de préstamo
      const response = await fetch('/api/solicitar-prestamo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Solicitud de préstamo exitosa');
        // Aquí puedes agregar lógica adicional luego de una solicitud exitosa
      } else {
        console.error('Error al solicitar el préstamo');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de préstamo: ', error);
    }
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
                      value={bookID}
                      onChange={handleBookIDChange}
                    />
                  </div>
                  <hr />
                  <div className="mt-1">
                    <p>Seleccione la fecha de entrega</p>
                    <DropdownCalendario />
                  </div>
                  <hr />
                  <button
                    className="btn btn-primary btn-lg btn-block mb-1 mt-1 rounded-3"
                    type="submit"
                    style={{ width: '100%', color: 'white', backgroundColor: '#57412E' }}
                    onClick={handleReserve}
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
                      value={bookID}
                      onChange={handleBookIDChange}
                    />
                  </div>
                  <hr />
                  <button
                    className="btn btn-primary btn-lg btn-block mt-1 rounded-3"
                    type="submit"
                    style={{ width: '100%', color: 'white', backgroundColor: '#57412E' }}
                    onClick={handleBorrowRequest}
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