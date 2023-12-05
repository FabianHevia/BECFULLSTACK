# BEC FULLSTACK

Este repositorio ha sido creado por los siguientes miembros:

* Fabian Hevia (MVP)
* Aaron Ortiz (El señorito)
* Christopher Chávez (El punta de lanza)
* Nicolas Valdivia (El que no tiene ningun pelo de tonto)
* Victor Camero (El muerto de hambre)
* Dante Felipe Tapia Vera, estudiante de la UNAB, miembro del colectivo LGQBT+ (Pitufo gruñon).


Comprension de la estructura de Carpetas:

Estructura de Carpetas
```sh
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

```

Recordamos encarecidamente instalar las dependencias a continuacion se adjuntan:

dependencies": {
    "bootstrap": "^5.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
}

Anotaciones sobre uso de componentes:

> Layout anotation 

```js
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
```

De esta manera, puedes pasar cualquier contenido dentro del componente Layout como hijos y se renderizarán en el lugar donde se encuentra {children} dentro de la definición del layout.

> Cards anotation 
```js
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
```

Proyecto con logica dinamica de Layout para diseños de Front End (no recomenadable).



# React + TypeScript + Vite

Este template nos permite configuar React con Vite con HMR  y ESLint.

Trabajaremos con los siguientes pluggins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para un renderisado mas rapido
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para un mejor renderisado

## Descarga del proyecto

Hemos de definir en primer lugar donde deseamos descargar todo el proyecto en la terminal para luego usar el siguiente comando: 

```shell
git clone "https://github.com/FabianHevia/BECFULLSTACK.git"
```

Con esto ahora solo nos quedara utilizar los comandos `npm`.

## Ejecucion y preparacion del entorno de desarrollo

Lista de comandos que se han de utilizar para hacer las intalaciones iniciales y ejecutar todo el proyecto: 

| Comandos                  |Acciones                                          |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalacion de dependencias                      |
| `npm run dev`             | Instalacion del entorno de desarrollaro e inicializa en `localhost:5173`      |


## Ampliando la configuración de ESLint

Si se va a trabajar la aplicacion en un entorno de produccion, se recomiendoa activar los siguientes cambios: 

- Configurar la propiedad `parserOptions` de la siguiente manera:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Remplazamos `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Es opcional agregar `plugin:@typescript-eslint/stylistic-type-checked`
- Instalar [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y agregar `plugin:react/recommended` & `plugin:react/jsx-runtime` a la `extends` de la lista

**Nota:** Con todo esto ya tendremos todo el `Front-end`.