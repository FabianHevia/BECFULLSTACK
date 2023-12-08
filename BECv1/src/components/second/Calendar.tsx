import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import './Calendar.css';
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
        className="btn btn-secondary"
        type="button"
        id="dropdownCalendario"
        onClick={handleToggleCalendar}
        aria-expanded="false"
        style={{ backgroundColor: '#57412E', minWidth: '100%' }}>
        Calendario
      </button>
      {showCalendar && (
        <div
          className="dropdown-menu show"
          aria-labelledby="dropdownCalendario"
          style={{ minWidth: '100%' }}>
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

