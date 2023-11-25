# BECFULLSTACK

Codigo de BEC Full Stack

Repositorio exclusivamente para Trabajo Universitario, proyecto creado con Vite, para inciar un proyecto con Vite se hace de la siguiente manera:

npm create vite@latest o en su defecto yarn create vite@latest
se eligen las preferencias
cd "nombre-de-tu-proyecto"
npm install
npm run dev

Comprension de la estructura de Carpetas:

Estructura de Carpetas

src/
|-- components/
|   |-- catalogo/
|   |   |-- Consultcatalogo.tsx
|   |   |-- Docfound.tsx
|   |   |-- Stylescatalogo.css
|   |-- principal/
|   |   |-- Header.tsx
|   |   |-- Footer.tsx
|	|	|-- Stylesprincipal.css
|   |-- second/
|   |   |-- Cards.tsx
|   |   |-- Slider.tsx
|	|	|-- Stylecards.css
|	|	|-- Styleslider.css
|-- Layout.tsx
|-- pages/
|   |-- Home.tsx
|   |-- Catalogo.tsx
|   |-- CatalogoUsuario.tsx
|   |-- Login.tsx
|   |-- Reservas.tsx
|-- App.css
|-- App.tsx
|-- index.css
|-- main.tsx

Recordamos encarecidamente instalar las dependencias a continuacion se adjuntan:

dependencies": {
    "bootstrap": "^5.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
}

Anotaciones sobre uso de componentes:

>> Layout anotation <<

import React from 'react';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <Layout title="Título de la Página">
      <div>
        {/* Contenido dinámico de la página */}
        <h1>Contenido de la Página</h1>
        <p>Otra parte del contenido.</p>
      </div>
    </Layout>
  );
};

export default App;

De esta manera, puedes pasar cualquier contenido dentro del componente Layout como hijos y se renderizarán en el lugar donde se encuentra {children} dentro de la definición del layout.

>> Cards anotation <<

import React from 'react';
import AstroCard from './AstroCard';

// Ejemplo de uso de la tarjeta normal
const normalCardProps = {
  link: 'URL_IMAGEN',
  title: 'Título de la tarjeta normal',
  information: 'Información de la tarjeta normal',
  messageButton: 'Click aquí',
};

// Ejemplo de uso de la tarjeta animada
const animatedCardProps = {
  link: 'URL_IMAGEN',
  title: 'Título de la tarjeta animada',
  information: 'Información de la tarjeta animada',
  messageButton: 'Click aquí',
  animated: true, // Establecer la bandera "animated" a true
};

const App: React.FC = () => {
  return (
    <div>
      <AstroCard {...normalCardProps} />
      <AstroCard {...animatedCardProps} />
    </div>
  );
};

export default App;

Proyecto con logica dinamica de Layout para diseños de Front End (no recomenadable).
