import React from 'react';
import './Unsuccess.css'; // Importa directamente el archivo CSS

interface AlertProps {
  header: string;
  message: string;
}

const Alert: React.FC<AlertProps> = ({ header, message }) => {
  return (
    <div>
      <div className="container-alert-message"></div>
      <div className="box-alert-message position-absolute top-50 start-50 translate-middle">
        <img src="Success Icon.png" alt="" style={{ width:'5vw',height:'5vh', maxWidth:'60px', maxHeight:'60px' }}/>
        <div className="header">{header}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default Alert;