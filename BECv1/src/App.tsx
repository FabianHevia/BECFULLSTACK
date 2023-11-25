import React, { useEffect, useState } from 'react';
import Layout from './Layout.tsx';
import Home from './pages/Home.tsx';
import Catalogo from './pages/Catalogo.tsx';
import CatalogoUsuario from './pages/CatalogoUsuario.tsx';
import Login from './pages/Login.tsx';
import Reservas from './pages/Reservas.tsx';

const App: React.FC = () => {
  const [pageTitle] = useState('BEC');
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Catalogo':
        return <Catalogo />;
      case 'CatalogoUsuario':
        return <CatalogoUsuario />;
      case 'Login':
        return <Login />;
      case 'Reservas':
        return <Reservas />;
      default:
        return <Home />;
    }
  };

  // Resto del contenido de tu componente App
  return (
    <div>
      <h1>{pageTitle}</h1>
      <Layout>
        {renderPage()}
      </Layout>
    </div>
  );
};

export default App;


