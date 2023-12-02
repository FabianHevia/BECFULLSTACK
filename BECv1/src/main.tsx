import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const title = 'BEC';

const metaTags = (
  <React.StrictMode>
    <meta charSet="utf-8" />
    <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
    {/* Otras etiquetas meta que desees incluir */}
  </React.StrictMode>
);

// Renderizado de la aplicación
ReactDOM.render(
  <>
    <html lang="es">
      <head>
        {metaTags}
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
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
      </head>
      <body>
        <div id="root">
          <App />
        </div>
      </body>
    </html>
  </>,
  document.getElementById('root')
);
