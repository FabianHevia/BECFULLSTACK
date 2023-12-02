import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const DropdownCalendario: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownCalendario" data-bs-toggle="dropdown" aria-expanded="false">
        Calendario
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownCalendario">
        <li>
          <div className="input-group p-2">
            <DatePicker
              className="form-control"
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Seleccionar fecha"
              dateFormat="yyyy-MM-dd"
              autoComplete="off"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownCalendario;

//import DropdownCalendario from '../components/second/Calendar';
//<div className="mt-1">
//<DropdownCalendario />
///</div>