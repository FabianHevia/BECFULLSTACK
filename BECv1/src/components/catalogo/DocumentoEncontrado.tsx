import React, { useState, useEffect } from 'react';
import DocumentStruct from '../second/DocumentStruct';

const DocumentoEncontrado: React.FC = () => {
  const [filteredDocuments, setFilteredDocuments] = useState([]); // Estado para almacenar documentos filtrados
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const [selectedAuthor, setSelectedAuthor] = useState(''); // Estado para el autor seleccionado
  const [selectedType, setSelectedType] = useState(''); // Estado para el tipo de libro seleccionado
  const [authorInput, setAuthorInput] = useState(''); // Estado para almacenar el autor ingresado por el usuario



  const documents = [
    {
      title: 'Ingeniería de Software',
      author: 'Martin Miranda',
      type: 'Libro Técnico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería de Software',
      author: 'Christian Carrasco',
      type: 'Libro Técnico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería Civil Informática',
      author: 'Gabriel Carrasco',
      type: 'Libro Teórico',
      category: 'Ingeniería Informática',
    },
    {
      title: 'Ingeniería Civil Informática',
      author: 'Gabriel Carrasco',
      type: 'Libro Teórico',
      category: 'Ingeniería Informática',
    },
    // Agrega más elementos si es necesario
  ];

  // Función para aplicar los filtros
  const applyFilters = () => {
    let filtered = [...documents];

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

    // Filtrar por tipo de libro si se ha seleccionado uno
    if (selectedType) {
      filtered = filtered.filter(doc => doc.type === selectedType);
    }

    setFilteredDocuments(filtered); // Actualizar la lista de documentos filtrados
  };

  // Llamar a la función de filtro cuando se cambie la categoría, autor o tipo seleccionado
  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedAuthor, selectedType]);

  return (
    <div>
      {/* Agregar controles de filtro para categoría, autor y tipo de libro */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {/* Opciones de categoría */}
        <option value="">Todas las categorías</option>
        {/* Aquí puedes generar opciones de categorías basadas en los documentos */}
        {/* Ejemplo: */}
        <option value="Ingeniería Informática">Ingeniería Informática</option>
        <option value="Ficción">Ficción</option>
        <option value="Drama">Drama</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
        {/* ... Otras opciones ... */}
      </select>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {/* Opciones de tipo de libro */}
        <option value="">Todos los tipos</option>
        {/* Aquí puedes generar opciones de tipo de libro basadas en los documentos */}
        {/* Ejemplo: */}
        <option value="Libro Técnico">Libro Técnico</option>
        <option value="Libro Teórico">Libro Teórico</option>
        {/* ... Otras opciones ... */}
      </select>

      {/* Campo de texto para que el usuario ingrese el autor */}
      <input
        type="text"
        placeholder="Ingrese el autor"
        value={authorInput}
        onChange={(e) => setAuthorInput(e.target.value)}
      />

      {/* Mostrar la lista de documentos filtrados o mensaje si no hay coincidencias */}
      {filteredDocuments.length > 0 ? (
        <DocumentStruct documents={filteredDocuments} />
      ) : (
        <p>No se encontraron documentos que coincidan con los filtros seleccionados.</p>
        // Aquí podrías mostrar otro componente o mensaje según tu preferencia
      )}
    </div>
  );
};

export default DocumentoEncontrado;