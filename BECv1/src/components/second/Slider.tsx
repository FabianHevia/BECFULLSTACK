import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiniCard from './Minicards';
import './Slider.css';
import axios from 'axios';

const Slider: React.FC = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [filteredBooks1, setFilteredBooks1] = useState<Book[]>([]);
  const [filteredBooks2, setFilteredBooks2] = useState<Book[]>([]);

  const handlePrevButtonClick = () => {
    const cardsWrapper = document.querySelector<HTMLElement>('.cards2-wrapper');
    if (cardsWrapper) {
      const scrollSpeed = 8; // Velocidad de desplazamiento
      const delay = 10; // Retraso entre cada cambio de posición

      const scroll = () => {
        const remainingScroll = Math.max(cardsWrapper.scrollLeft - scrollSpeed, 0);
        cardsWrapper.scrollLeft = remainingScroll;

        if (remainingScroll > 0) {
          setTimeout(scroll, delay);
        }
      };

      scroll();
    }
  };

  const handleNextButtonClick = () => {
    const cardsWrapper = document.querySelector<HTMLElement>('.cards2-wrapper');
    if (cardsWrapper) {
      const scrollSpeed = 8; // Velocidad de desplazamiento
      const delay = 10; // Retraso entre cada cambio de posición

      const scroll = () => {
        const remainingScroll = Math.min(cardsWrapper.scrollLeft + scrollSpeed, cardsWrapper.scrollWidth - cardsWrapper.clientWidth);
        cardsWrapper.scrollLeft = remainingScroll;

        if (remainingScroll < cardsWrapper.scrollWidth - cardsWrapper.clientWidth) {
          setTimeout(scroll, delay);
        }
      };

      scroll();
    }
  };

  useEffect(() => {
    const prevButton = document.querySelector<HTMLElement>('.carousel-control-prev');
    const nextButton = document.querySelector<HTMLElement>('.carousel-control-next');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', handlePrevButtonClick);
      nextButton.addEventListener('click', handleNextButtonClick);
    }

    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener('click', handlePrevButtonClick);
        nextButton.removeEventListener('click', handleNextButtonClick);
      }
    };
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>('http://localhost:3000/api/documentos');
        const booksData = response.data; // Datos de todos los libros obtenidos de la API
        setBookList(booksData); // Almacena los datos de todos los libros en el estado 'bookList'

        // Filtrar los libros por el tipo "Novela"
        const filteredNovelaBooks = booksData.filter(book => book.type === 'Novela');
        setFilteredBooks1(filteredNovelaBooks); // Almacena los libros filtrados en el estado 'filteredBooks'

        const filteredTecnicoBooks = booksData.filter(book => book.type === 'Libro Teórico');
        setFilteredBooks2(filteredTecnicoBooks); // Almacena los libros filtrados en el estado 'filteredBooks'


      } catch (error) {
        console.error('Error al obtener la lista de libros:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div className="col-12 mt-5 mb-5">
        <h3 className="text-color">LAS MEJORES NOVELAS</h3>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards2-wrapper">
                {filteredBooks1.map((book, index) => (
                  <MiniCard
                  key={index}
                  id={book._id || ''}
                  titulo={book.title || ''} // Utiliza el título proporcionado por la API
                  autor={`${book.author || ''}`} // Información adicional del libro
                  tipo={`${book.type || ''}`}
                  categoria={`${book.category || ''}`}
                  img={book.img || ''} // Utiliza la imagen proporcionada por la API
                  />
                  ))}
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>


      <div className="col-12 mt-5 mb-5">
        <h3 className="text-color">LIBROS TEÓRICOS que te VOLARAN la CABEZA</h3>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards2-wrapper">
                {filteredBooks2.map((book, index) => (
                  <MiniCard
                  key={index}
                  id={book._id || ''}
                  titulo={book.title || ''} // Utiliza el título proporcionado por la API
                  autor={`${book.author || ''}`} // Información adicional del libro
                  tipo={`${book.type || ''}`}
                  categoria={`${book.category || ''}`}
                  img={book.img || ''} // Utiliza la imagen proporcionada por la API
                  />
                  ))}
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;


