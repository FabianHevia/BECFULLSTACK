import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import './Calendar.css'

const DropdownCalendario: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setShowCalendar(false); // Oculta el calendario después de seleccionar una fecha
  };

  return (
    <div className="dropdown">
      <button 
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownCalendario"
        onClick={handleToggleCalendar}
        aria-expanded="false" 
        style={{ backgroundColor: '#57412E', minWidth: '100%'}}>
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