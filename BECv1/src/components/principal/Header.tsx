import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface HeaderInter {
    handleNavigation:(page: string) => void;
}

const Header: React.FC<HeaderInter> = ({ handleNavigation }) => {
  return (
      <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow sticky-top py-0.5 start-0 end-0" id="miNavbar" style={{ background: '#ffffff' }}>
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
              <NavLink to="/" className="nav-link text-dark letra font-weight-bold d-flex align-items-center me-2" onClick={() => handleNavigation('Home')}>Inicio</NavLink>
            </li>
            <div className="dropdown">
              <li className="nav-item ">
                <NavLink to="/catalogo" className="nav-link text-dark letra font-weight-bold d-flex align-items-center me-2" onClick={() => handleNavigation('catalogo')}>Catalogo</NavLink>
                <ul className="dropdown-menu ">
                  <li><NavLink to="/catalogoUsuario" className="dropdown-item" onClick={() => handleNavigation('catalogoUsuario')}>Usuario</NavLink></li>
                  <li><NavLink to="/catalogo" className="dropdown-item" onClick={() => handleNavigation('catalogo')}>Empleado</NavLink></li>
                </ul>
              </li>
            </div>
            <li className="nav-item">
              <NavLink to="/reservas" className="nav-link text-dark letra font-weight-bold d-flex align-items-center me-2" onClick={() => handleNavigation('reservas')}>Reserva</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" role="button">
                <i className="fa fa-user" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;