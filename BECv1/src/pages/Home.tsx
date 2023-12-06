import { Carousel } from '../../node_modules/bootstrap';
import React, { useEffect, useState } from 'react';
import Cards from '../components/second/Cards';
import Noticias from '../components/second/Noticias';
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

const noticias = [
  {
    titulo: 'Título de la noticia 1',
    resumen: 'Resumen o párrafo de la noticia 1...',
    fecha: '25 Nov 2023',
  },
  {
    titulo: 'Título de la noticia 2',
    resumen: 'Resumen o párrafo de la noticia 2...',
    fecha: '24 Nov 2023',
  },
    // ... más noticias
];

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

      <h2 className="titleCards">Destacados</h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="adjust col-md-4 mb-4 d-flex justify-content-center">
            <Cards
              link="https://www.loqueleo.com/mx/uploads/2018/07/resized/800_portada-un-libro-web.jpg"
              title="John Doe"
              information="Some example text some example text. John Doe is an architect and engineer"
            />
          </div>
          <div className="card-img-top-home adjust col-md-4 mb-4 d-flex justify-content-center">
            <Cards
              link="https://www.loqueleo.com/mx/uploads/2018/07/resized/800_portada-un-libro-web.jpg"
              title="John Doe"
              information="Some example text some example text. John Doe is an architect and engineer"
            />
          </div>
          <div className="adjust col-md-4 mb-4 d-flex justify-content-center">
            <Cards
              link="https://www.loqueleo.com/mx/uploads/2018/07/resized/800_portada-un-libro-web.jpg"
              title="John Doe"
              information="Some example text some example text. John Doe is an architect and engineer"
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1 className="mt-5 d-flex justify-content-center mx-auto noticiasTitle rounded-2" style= {{ backgroundColor: '#2f2321', maxWidth: '50.3%' }}>Noticias</h1>
        <Noticias noticias={noticias} />
      </div>
      <div className="mb-5">
        <div className="container mb-5" style={{ minHeight:'20px' }}>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET al servidor para obtener las noticias
    fetch('/api/noticias')
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((error) => console.error('Error al obtener las noticias:', error));
  }, []);
  return (
    <div>
      <MyCarousel />
    </div>
  );
};
export default Home;