import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
// Asumiendo que Calendario es un modelo de datos
interface DropdownCalendarioProps {
  onDateChange: (date: Date | null) => void;
}

const DropdownCalendario: React.FC<DropdownCalendarioProps> = ({ onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date);
    setShowCalendar(false); // Oculta el calendario después de seleccionar una fecha
    console.log('Fecha seleccionada:', date); // Agregar console.log para verificar la fecha seleccionada
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownCalendario"
        onClick={handleToggleCalendar}
        aria-expanded="false"
        style={{ backgroundColor: '#57412E', minWidth: '80%' }}>
        Calendario
      </button>
      {showCalendar && (
        <div
          className="dropdown-menu show d-flex justify-content-center align-items-center"
          aria-labelledby="dropdownCalendario"
          style={{
            minWidth: '80%',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
          <div className="p-2">
            <DatePicker
              className="form-control"
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Seleccionar fecha"
              dateFormat="yyyy-MM-dd"
              autoComplete="off"
              inline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownCalendario;

