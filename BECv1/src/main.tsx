import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Obtener el contenedor donde se va a renderizar la aplicación
const container = document.getElementById('root');

// Verificar si el contenedor existe antes de renderizar
if (container) {
  // Crear un nuevo root utilizando createRoot de react-dom/client
  const root = createRoot(container);

// Renderizar la aplicación dentro del nuevo root
  root.render(
    <React.StrictMode>
      <html lang="es">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.png" />
          {/* Otras etiquetas meta que desees incluir */}
          <meta name="viewport" content="width=device-width" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
          <link 
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" 
            rel="stylesheet"
          />
        </head>
        <body>
          <div id="root">
            <App />
          </div>
        </body>
      </html>
    </React.StrictMode>
  );
} else {
  console.error('El contenedor con ID "root" no se encontró en el DOM.');
}
