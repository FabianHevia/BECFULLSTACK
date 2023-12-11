import { Carousel } from '../../node_modules/bootstrap';
import React, { useEffect, useState } from 'react';
import Cards from '../components/second/Cards';
import { Noticias } from '../components/second/Noticias';
import axios, { AxiosResponse } from 'axios';
import './Home.css';

const MyCarousel: React.FC = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>('http://localhost:3000/api/documentos');
        const booksData = response.data; // Datos de todos los libros obtenidos de la API
        setBookList(booksData); // Almacena los datos de todos los libros en el estado 'bookList'

        const myCarousel = document.getElementById('demo');
        if (myCarousel) {
          const carousel = new Carousel(myCarousel, {
            interval: 2000,
          });
        }
      } catch (error) {
        console.error('Error al obtener la lista de libros:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.parliament.uk/contentassets/aa8b9933d3cb4364b827e7a60ea898e0/hl_library_roger-harris2022.jpg?format=webp&width=1000&quality=85"
              alt="Los Angeles"
              className="d-block w-100 carousel-img"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/8/19/1408432390748/4557b0ab-d47d-4434-91c9-6b44b9d17c26-2060x1236.jpeg"
              alt="Chicago"
              className="d-block w-100 carousel-img"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://st1.uvnimg.com/d2/83/1a0325a34c36a71e9ca82c0846f1/biblioteca-publica-de-nueva-york-500.000%20libros.jpg"
              alt="New York"
              className="d-block w-100 carousel-img"
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <br />
      <div className="container mt-5 rounded-5 fondo-home-1 border border-black">
      <br />
        <h2 className="titleCards mt-5 mb-5">Destacados</h2>
        <div className="row">
          <div className="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              id={bookList[21]?._id || ''}
              titulo={bookList[21]?.title || ''} // Utiliza el título proporcionado por la API
              autor={`${bookList[21]?.author || ''}`} // Información adicional del libro
              tipo={`${bookList[21]?.type || ''}`}
              categoria={`${bookList[21]?.category || ''}`}
              img={bookList[21]?.img || ''} // Utiliza la imagen proporcionada por la API
            />
          </div>
          <div className="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              id={bookList[9]?._id || ''}
              titulo={bookList[9]?.title || ''} // Utiliza el título proporcionado por la API
              autor={`${bookList[9]?.author || ''}`} // Información adicional del libro
              tipo={`${bookList[9]?.type || ''}`}
              categoria={`${bookList[9]?.category || ''}`}
              img={bookList[9]?.img || ''} // Utiliza la imagen proporcionada por la API
            />
          </div>
          <div className="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              id={bookList[4]?._id || ''}
              titulo={bookList[4]?.title || ''} // Utiliza el título proporcionado por la API
              autor={`${bookList[4]?.author || ''}`} // Información adicional del libro
              tipo={`${bookList[4]?.type || ''}`}
              categoria={`${bookList[4]?.category || ''}`}
              img={bookList[4]?.img || ''} // Utiliza la imagen proporcionada por la API
            />
          </div>
          <div className="row">
          <div className="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              id={bookList[18]?._id || ''}
              titulo={bookList[18]?.title || ''} // Utiliza el título proporcionado por la API
              autor={`${bookList[18]?.author || ''}`} // Información adicional del libro
              tipo={`${bookList[18]?.type || ''}`}
              categoria={`${bookList[18]?.category || ''}`}
              img={bookList[18]?.img || ''} // Utiliza la imagen proporcionada por la API
            />
          </div>
          <div className="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              id={bookList[10]?._id || ''}
              titulo={bookList[10]?.title || ''} // Utiliza el título proporcionado por la API
              autor={`${bookList[10]?.author || ''}`} // Información adicional del libro
              tipo={`${bookList[10]?.type || ''}`}
              categoria={`${bookList[10]?.category || ''}`}
              img={bookList[10]?.img || ''} // Utiliza la imagen proporcionada por la API
            />
          </div>
          <div className="col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              id={bookList[20]?._id || ''}
              titulo={bookList[20]?.title || ''} // Utiliza el título proporcionado por la API
              autor={`${bookList[20]?.author || ''}`} // Información adicional del libro
              tipo={`${bookList[20]?.type || ''}`}
              categoria={`${bookList[20]?.category || ''}`}
              img={bookList[20]?.img || ''} // Utiliza la imagen proporcionada por la API
            />
          </div>
          </div>
          <div className="mb-5" ></div>
        </div>
      </div>
    </div>
  );
};

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  // ... otros campos de la noticia
}

const Home: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);

  useEffect(() => {
    // Función para obtener las noticias desde la API
    const obtenerNoticias = async (): Promise<void> => {
      try {
        // Realiza la solicitud a la API de noticias
        const response: AxiosResponse<Noticia[]> = await axios.get('http://localhost:3000/api/noticias');

        // Verifica si la respuesta contiene datos en forma de arreglo
        if (Array.isArray(response.data)) {
          // Actualiza el estado de noticias con los datos obtenidos
          setNoticias(response.data);
        } else {
          console.error('La respuesta no es un array:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener las noticias:', error);
      }
    };

    // Llama a la función para obtener las noticias al cargar el componente
    obtenerNoticias();
  }, []);
  return (
    <div>
      <MyCarousel />
      <br />
      <div >
      <div className="container mt-5 rounded-5 fondo-home-2 border border-black" style={{ maxWidth:'50%'}}>
        <h1 className="d-flex justify-content-center mx-auto noticiasTitle">Noticias</h1>
        <Noticias noticias={noticias} />
        <br/>
        <img className="mb-2 buhogod" src="Buho BEC.png" style={{ minWidth:'100px', minHeight:'100px' }}></img>
      </div>
      </div>
      <div className="mb-5">
        <div className="container mb-5" style={{ minHeight:'20px' }}>
        </div>
      </div>
    </div>
  );
};
export default Home;