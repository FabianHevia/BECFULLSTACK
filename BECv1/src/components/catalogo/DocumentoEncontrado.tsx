import React, { useState, useEffect } from 'react';
import DocumentStruct from '../second/DocumentStruct';
<<<<<<< Updated upstream
=======
import './Stylescatalogo.css';
import axios from 'axios'; // Importa Axios o la librería que uses para hacer solicitudes HTTP
>>>>>>> Stashed changes

const DocumentoEncontrado: React.FC = () => {
  const [filteredDocuments, setFilteredDocuments] = useState([]); // Estado para almacenar documentos filtrados
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const [selectedAuthor, setSelectedAuthor] = useState(''); // Estado para el autor seleccionado
  const [selectedTitulo, setSelectedTitulo] = useState(''); // Estado para el titulo seleccionado
  const [selectedType, setSelectedType] = useState(''); // Estado para el tipo de libro seleccionado
  const [authorInput, setAuthorInput] = useState(''); // Estado para almacenar el autor ingresado por el usuario
  const [tituloInput, setTituloInput] = useState(''); // Estado para almacenar el titulo ingresado por el usuario


  const documents = [
    // Ciencia Ficción
  {
    title: 'Viaje a las Estrellas',
    author: 'Alicia Novak',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Máquinas del Futuro',
    author: 'Carlos Galáctico',
    type: 'Libro Técnico',
    category: 'Ciencia Ficción',
  },
  {
    title: 'La Última Frontera',
    author: 'David Estelar',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'El Último Exoplaneta',
    author: 'Marta Galáctica',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Realidad Virtual',
    author: 'Hugo Espacial',
    type: 'Libro Técnico',
    category: 'Ciencia Ficción',
  },
  {
    title: 'La Rebelión de las Máquinas',
    author: 'Eva Robótica',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Aventuras Temporales',
    author: 'Diego Crononauta',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Hijos de las Estrellas',
    author: 'Isabel Astro',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Exploradores del Cosmos',
    author: 'Natalia Espacial',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Inteligencia Artificial Despierta',
    author: 'Roberto Cibernético',
    type: 'Libro Técnico',
    category: 'Ciencia Ficción',
  },
  {
    title: 'El Portal Dimensional',
    author: 'Lorena Cuántica',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Revolución Robótica',
    author: 'Alejandro Máquina',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  {
    title: 'Aventuras Intergalácticas',
    author: 'Carmen Astro',
    type: 'Novela',
    category: 'Ciencia Ficción',
  },
  // Drama
  {
    title: 'Caminos Cruzados',
    author: 'Elena Drama',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Secretos Familiares',
    author: 'Juan Tragedia',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Entre Luces y Sombras',
    author: 'María Drama',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Destinos Entrelazados',
    author: 'Carla Emociones',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Vidas Rotas',
    author: 'Javier Tragedia',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Entre el Amor y el Odio',
    author: 'Sofía Intensa',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Decisiones Difíciles',
    author: 'Raúl Conflictivo',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Lágrimas en el Crepúsculo',
    author: 'Luisa Melancolía',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Pasiones Ocultas',
    author: 'Rodrigo Sentimientos',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Secretos del Pasado',
    author: 'Laura Trágica',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Amores Prohibidos',
    author: 'Julián Romántico',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Destinos Rotos',
    author: 'Silvia Desgarradora',
    type: 'Novela',
    category: 'Drama',
  },
  {
    title: 'Melodía del Corazón',
    author: 'Eduardo Emotivo',
    type: 'Novela',
    category: 'Drama',
  },
  // Ficción
  {
    title: 'Mundos Imaginarios',
    author: 'Fernando Fantasía',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Realidades Alteradas',
    author: 'Laura Imaginaria',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Historias Inventadas',
    author: 'Pedro Ficción',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'El Jardín de las Ideas',
    author: 'Gabriel Creativo',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Mundos Paralelos',
    author: 'Verónica Imaginaria',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Historias Inexploradas',
    author: 'Pablo Soñador',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'El Libro de los Sueños',
    author: 'Valentina Fantástica',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Realidades Alternativas',
    author: 'Mario Ilusión',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'El Sueño del Inventor',
    author: 'Isabella Inventora',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Imágenes Fantásticas',
    author: 'Gabriel Soñador',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Aventuras Inexploradas',
    author: 'Natalia Imaginaria',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'El Libro de las Maravillas',
    author: 'Francisco Fantástico',
    type: 'Novela',
    category: 'Ficción',
  },
  {
    title: 'Mundos Paralelos',
    author: 'Luna Ilusión',
    type: 'Novela',
    category: 'Ficción',
  },
  // Ingeniería Informática
  {
    title: 'Algoritmos Avanzados',
    author: 'Martín Ingeniero',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Redes y Comunicaciones',
    author: 'Ana Coder',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Desarrollo Web Moderno',
    author: 'Luis Programador',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Introducción a la Inteligencia Artificial',
    author: 'Ana Científica',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Seguridad en Sistemas Informáticos',
    author: 'Luis Hacker',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Desarrollo Ágil de Software',
    author: 'María Ágil',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Redes Neuronales Profundas',
    author: 'Javier Redes',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Programación Orientada a Objetos',
    author: 'Carlos Programador',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Desarrollo Web Avanzado',
    author: 'Mario Desarrollador',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Ciberseguridad para Principiantes',
    author: 'Ana Cibersegura',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Introducción a la Computación Cuántica',
    author: 'Elena Cuántica',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Optimización de Bases de Datos',
    author: 'Carlos DBA',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Programación Funcional',
    author: 'Laura Funcional',
    type: 'Libro Técnico',
    category: 'Ingeniería Informática', 
  },

  // Libros Teóricos
  {
    title: 'Estructuras de Datos y Algoritmos',
    author: 'Carlos Algoritmo',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Machine Learning Explorado',
    author: 'Laura Aprendiz',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Fundamentos de Redes de Computadoras',
    author: 'Javier Redes',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Diseño de Compiladores Modernos',
    author: 'Martina Compiladora',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Teoría de Sistemas Operativos',
    author: 'Olivia Operativa',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Algoritmos Genéticos en la Optimización',
    author: 'Gabriel Genético',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Teoría de la Información y Codificación',
    author: 'Isabel Informática',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Inteligencia Artificial: Principios y Aplicaciones',
    author: 'Roberto Inteligente',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Seguridad en Sistemas Distribuidos',
    author: 'Sara Segura',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Programación Funcional Avanzada',
    author: 'Fernanda Funcional',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  },
  {
    title: 'Computación Gráfica: Fundamentos y Prácticas',
    author: 'Carlos Gráfico',
    type: 'Libro Teórico',
    category: 'Ingeniería Informática',
  }];

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

  /*   useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const response = await axios.get<DocumentData[]>('http://localhost:3001/api/documentos');
        setFilteredDocuments(response.data);
      } catch (error) {
        console.error('Error al obtener los documentos:', error);
      }
    };
    fetchDocumentos();
  }, []); */

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
        <option value="Novela">Novela</option>
        {/* ... Otras opciones ... */}
      </select>

      {/* Campo de texto para que el usuario ingrese el autor */}
      <input
        type="text"
        placeholder="Ingrese el autor"
        value={authorInput}
        onChange={(e) => setAuthorInput(e.target.value)}
      />
      {/* Campo de texto para que el usuario ingrese el titulo */}
      <input
        type="text"
        placeholder="Ingrese el titulo"
        value={tituloInput}
        onChange={(e) => setTituloInput(e.target.value)}
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