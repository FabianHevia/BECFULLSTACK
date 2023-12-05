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