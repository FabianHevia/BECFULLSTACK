import React from 'react';
import './Stylesprincipal.css';

interface HeaderInter {
    handleNavigation:(page: string) => void;
}

const Header: React.FC<HeaderInter> = ({ handleNavigation }) => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow sticky-top py-0.5 start-0 end-0" id="miNavbar">
      <div className="container px-1">
        <a href="/">
          <img className="imagen-responsive" src="Logo.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark letra font-weight-bold d-flex align-items-center me-2" aria-current="page" href="/" onClick={() => handleNavigation('')}>Inicio</a>
            </li>
            <div className="dropdown">
              <li className="nav-item ">
                <a className="nav-link text-dark letra font-weight-bold d-flex align-items-center me-2" data-bs-toggle="dropdown">Catalogo</a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="/catalogoUsuario" onClick={() => handleNavigation('catalogoUsuario')}>Usuario</a></li>
                  <li><a className="dropdown-item" href="/catalogo" onClick={() => handleNavigation('catalogo')}>Empleado</a></li>
                </ul>
              </li>
            </div>
            <li className="nav-item">
              <a className="nav-link text-dark letra font-weight-bold d-flex align-items-center me-2" aria-current="page" href="/reservas" onClick={() => handleNavigation('reservas')}>Reserva</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" role="button">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

