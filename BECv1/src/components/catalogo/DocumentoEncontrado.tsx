import React, { useState, useEffect } from 'react';
import DocumentStruct from '../second/DocumentStruct';
import { DocumentData } from './DocumentData';
import './Stylescatalogo.css';
import axios from 'axios'; // Importa axios

const DocumentoEncontrado: React.FC = () => {
  const [apiData, setApiData] = useState<DocumentData[]>([]); // Almacena los datos de la API
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentData[]>([]); // Estado para almacenar documentos filtrados
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const [selectedAuthor, setSelectedAuthor] = useState(''); // Estado para el autor seleccionado
  const [selectedTitulo, setSelectedTitulo] = useState(''); // Estado para el titulo seleccionado
  const [selectedType, setSelectedType] = useState(''); // Estado para el tipo de libro seleccionado
  const [authorInput, setAuthorInput] = useState(''); // Estado para almacenar el autor ingresado por el usuario
  const [tituloInput, setTituloInput] = useState(''); // Estado para almacenar el titulo ingresado por el usuario

  // Función para aplicar los filtros
  const applyFilters = () => {
    let filtered = [...apiData];
    // Filtrar por categoría si se ha seleccionado una
    if (selectedCategory) {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    // Filtrar por autor si se ha seleccionado uno
    if (selectedAuthor) {
      filtered = filtered.filter(doc => doc.author === selectedAuthor);
    } else if (authorInput) { // Filtrar por el autor ingresado por el usuario si está presente
      filtered = filtered.filter(doc => doc.author.toLowerCase().includes(authorInput.toLowerCase()));
    }
    // Filtrar por titulo si se ha seleccionado uno
    if (selectedTitulo) {
      filtered = filtered.filter(doc => doc.title === selectedTitulo);
    } else if (tituloInput) { // Filtrar por el titulo ingresado por el usuario si está presente
      filtered = filtered.filter(doc => doc.title.toLowerCase().includes(tituloInput.toLowerCase()));
    }

    // Filtrar por tipo de libro si se ha seleccionado uno
    if (selectedType) {
      filtered = filtered.filter(doc => doc.type === selectedType);
    }

    setFilteredDocuments(filtered); // Actualizar la lista de documentos filtrados
  };

  // Llamar a la función de filtro cuando se cambie la categoría, autor o tipo seleccionado
  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedAuthor, selectedType, authorInput, tituloInput]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/documentos');
        setApiData(response.data);
        setFilteredDocuments(response.data); // Al principio, muestra todos los documentos sin filtros
      } catch (error) {
        console.error('Error al obtener los documentos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Agregar controles de filtro para categoría, autor y tipo de libro */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="position relative mt-3 select-css"
      >
        {/* Opciones de categoría */}
        <option value="">Todas las categorías</option>
        {/* Aquí puedes generar opciones de categorías basadas en los documentos */}
        {/* Ejemplo: */}
        <option value="Ingeniería Informática">Ingeniería Informática</option>
        <option value="Ficción">Ficción</option>
        <option value="Drama">Drama</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
        <option value="Ciencia">Ciencia</option>
        <option value="Filosofía">Filosofía</option>
        {/* ... Otras opciones ... */}
      </select>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="position relative mt-3 select-css"
      >
        {/* Opciones de tipo de libro */}
        <option value="">Todos los tipos</option>
        {/* Aquí puedes generar opciones de tipo de libro basadas en los documentos */}
        {/* Ejemplo: */}
        <option value="Libro Técnico">Libro Técnico</option>
        <option value="Libro Teórico">Libro Teórico</option>
        <option value="Novela">Novela</option>
        {/* ... Otras opciones ... */}
      </select>

      {/* Campo de texto para que el usuario ingrese el autor */}
      <input
        type="text"
        className="form-control form-control-lg mt-4 mx-auto"
        placeholder="Ingrese el autor"
        value={authorInput}
        onChange={(e) => setAuthorInput(e.target.value)}
        style={{ maxWidth:'80%' }}
      />
      {/* Campo de texto para que el usuario ingrese el titulo */}
      <input
        type="text"
        placeholder="Ingrese el titulo"
        className="form-control form-control-lg mt-4 mx-auto"
        value={tituloInput}
        onChange={(e) => setTituloInput(e.target.value)}
        style={{ maxWidth:'80%' }}
      />

      {/* Mostrar la lista de documentos filtrados o mensaje si no hay coincidencias */}
      {filteredDocuments.length > 0 ? (
        <DocumentStruct documents={filteredDocuments}/>
      ) : (
        <div className="container mx-auto" style={{ backgroundColor:'#0000' }}>
          <div className="row">
            <div className="col-md-8">
              <p className="position-relative start-50 top-50 translate-middle no-libros-texto">Lo sentimos, no pudimos encontrar un articulo que cumpliera con sus exigencias :(</p>
            </div>
            <div className="col-md-4">
              <img className="mx-auto pe-5 no-libros" src="Mounstruos-nolibros-BEC.png" style={{ minWidth:'100px', minHeight:'100px' }}></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentoEncontrado;