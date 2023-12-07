import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './pages/Home.tsx';
import Catalogo from './pages/Catalogo.tsx';
import CatalogoUsuario from './pages/CatalogoUsuario.tsx';
import Login from './pages/Login.tsx';
import Reservas from './pages/Reservas.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Layout handleNavigation={handleNavigation} currentPage={currentPage} background="linear-gradient(45deg, #ddbb93, #ddd8d3, #ddbb93)">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/catalogoUsuario" element={<CatalogoUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reservas" element={<Reservas />} />
          </Routes>
      </Layout>
    </Router>
  );
};

export default App;


