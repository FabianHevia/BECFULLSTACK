import React, { useState } from 'react';
import './Reservas.css';
import 'react-datepicker/dist/react-datepicker.css';
import DropdownCalendario from '../components/second/Calendar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

interface LocationState {
  id: string;
  titulo: string;
  autor: string;
  tipo: string;
  categoria: string;
  img: string;
}

import { generarCodigoAleatorio } from '../server/controller/reservaCode';

const Reservas: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const location = useLocation();
  const state = location.state as LocationState;

  const { id, titulo, autor, tipo, categoria, img } = state;

  const handleReservaClick = async () => {
    if (selectedDate && id) {
      // Calcula la fecha de devolución (14 días después de la fecha seleccionada)
      const fechaReserva = new Date(selectedDate);
      fechaReserva.setDate(fechaReserva.getDate() + 14)

      let fechaReservaString = selectedDate.toISOString(); // Obtener la fecha en formato ISO
      let idCompra = generarCodigoAleatorio(); // Generar un ID aleatorio inicial
      
      console.log('bookID:', id);
      console.log('deliveryDate:', fechaReservaString);
      console.log('requestType:', idCompra);

      try {
        await axios.post('http://localhost:3000/api/reservas', {
          bookID: id,
          deliveryDate: fechaReservaString,
          requestType: idCompra,
        });
        
        console.log('Reserva exitosa:', idCompra);
      } catch (error) {
        console.error('Error al hacer la reserva:', error);
      }
    } else {
      console.log('Selecciona una fecha antes de reservar.');
    }
  };

  const handleDropdownSelect = (opcion: string) => {
    setOpcionSeleccionada(opcion);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  

  const renderElementosSegunOpcion = () => {
    if (opcionSeleccionada === 'Reserva') {
      return (
        <div className="mt-3">
          <hr className="mx-auto" style={{ maxWidth: '80%' }}/>
          <h3 className="bold-text mt-3">Reservar Documento</h3>
          <hr className="mx-auto" style={{ maxWidth: '80%' }}/>
           <div>
            <p>Seleccione la fecha de entrega</p>
            <DropdownCalendario onDateChange={handleDateChange}/>
          </div>
          <hr className="mx-auto" style={{ maxWidth: '80%' }}/>
          <button
            className="btn btn-primary btn-lg btn-block rounded-3 mx-auto"
            type="submit"
            style={{ minWidth: '80%', color: 'white', backgroundColor: '#57412E' }}
            onClick={handleReservaClick}
            >
            Reservar
          </button>
        </div>
      );
    } else if (opcionSeleccionada === 'Prestamo') {
      return (
        <div>
          <hr className="mx-auto" style={{ maxWidth: '80%' }}/>
          <br></br>
          <br></br>
          <button
            className="btn btn-primary btn-lg btn-block rounded-3 mx-auto"
            type="submit"
            style={{ minWidth: '80%', color: 'white', backgroundColor: '#57412E' }}
            >
            Solicitar Prestamo
          </button>
          <br></br>
          <br></br>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  };

  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 animated">
            <div className="contenedor-imagen-muestra">
              <img 
                  src={img}
                  className="border border-black border-2 rounded-3 imagen-muestra"
                  style={{ maxHeight:'800px', maxWidth: '600px' }}
              ></img>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
                    <div className="container mx-auto text-center rounded-4 border border-black animated" style={{ backgroundColor: "#ddd8d3" }}>
                      <div className="row justify-content-end align-items-center">
                        <div className="col-6">
                          <h3 className="bold-text mt-3">Realizar Acción</h3>
                        </div>
                          <div className="col-6 mt-3">
                            <img src="Fondo_-_1-removebg-preview.png" className="align-items-center" style={{ width: '100vh', maxWidth: '80px', height: '100vh', maxHeight: '120px' }}></img></div>
                          </div>
                      <div className="form-outline">
                      <hr className="mx-auto" style={{ maxWidth: '80%' }}/>
                        <div className="form-label">Informacion del libro:
                        <div className="form-control form-control-lg rounded-4 mx-auto" style={{ maxWidth: '90%' }}>
                          <p>
                            id: {id}<br />
                            título: {titulo}<br />
                            autor: {autor}<br />
                            tipo: {tipo}<br />
                            categoría: {categoria}<br />
                          </p>
                        </div>
                        </div>
                      </div>
                      <hr className="mx-auto" style={{ maxWidth: '80%' }}/>
                      <div className="mt-1">
                        <div className="dropdown">
                          <p>Seleccione el tipo de acción</p>
                          <button
                          className="btn btn-primary dropdown-toggle btn-lg btn-block rounded-3"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ minWidth: '90%', color: 'white', backgroundColor: '#57412E' }}
                          >
                          Tipo de acción 
                          </button>
                          <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton" style={{ width: '90%', backgroundColor: 'white'}}>
                            <li><a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); handleDropdownSelect('Reserva'); }}>Reserva</a></li>
                            <li><a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); handleDropdownSelect('Prestamo'); }}>Prestamo</a></li>
                          </ul>
                        </div>
                      </div>
                      {renderElementosSegunOpcion()}
                      <br/><br/>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
              </div>
  );
};

export default Reservas;