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
        <img src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/error_warning_alert_attention-128.png" alt="" />
        <div className="header">{header}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default Alert;
