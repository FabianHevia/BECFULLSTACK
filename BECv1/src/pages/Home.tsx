import { Carousel } from '../../node_modules/bootstrap';
import React, { useEffect, useState } from 'react';
import Cards from '../components/second/Cards';
import { Noticias } from '../components/second/Noticias';
import axios, { AxiosResponse } from 'axios';
import './Home.css';

const MyCarousel: React.FC = () => {
  useEffect(() => {
    const myCarousel = document.getElementById('demo');

    if (myCarousel) {
      const carousel = new Carousel(myCarousel, {
        interval: 2000,
      });
    }
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
              link="Atlantis.jpg"
              title="Atlantis: Proyecto Tarsis"
              information="José Enrique Serrano Expósito"
            />
          </div>
          <div className="adjust col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              link="CuentosDeOtono.webp"
              title="Cuentos de Otoño"
              information="José J. de Olañeta"
            />
          </div>
          <div className="adjust col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
            <Cards
              link="HerederadeFuego.webp"
              title="Heredera de Fuego"
              information="Sarah J. Maas"
            />
          </div>
          <div className="row">
            <div className="adjust col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
              <Cards
                link="MatarAunRuisenor.webp"
                title="Matar a un Ruiseñor"
                information="Harper Lee"
              />
            </div>
            <div className="adjust col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
              <Cards
                link="NaranjaMecanica.jpg"
                title="La Naranja Mecanica"
                information="Anthony Burges"
              />
            </div>
            <div className="adjust col-md-4 col-xs-12 mb-4 d-flex justify-content-center">
              <Cards
                link="Elzorro.webp"
                title="El Zorro en el bosque"
                information="Salma Dubois"
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
      <div>
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