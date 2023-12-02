import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/BibliotecaNacionaldeChile" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/BNChile" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/c/BibliotecaNacionaldeChile" role="button">
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/bnchile/?hl=es-la" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          {/* Section: Text */}
          <section className="mb-4">
            <p>
              Somos una librería de altos estándares dedicada a fomentar la pasión por la lectura y el conocimiento. Nuestra misión es ofrecer a nuestros clientes una amplia selección de libros de calidad, desde los clásicos más emblemáticos hasta las novedades literarias más emocionantes. Con un equipo apasionado por la literatura y un compromiso inquebrantable con la excelencia en el servicio al cliente, estamos aquí para ser tu destino literario de confianza. Descubre un mundo de historias, conocimiento y aventuras en cada visita a nuestra librería. ¡Te esperamos con los brazos abiertos para compartir el placer de la lectura!
            </p>
          </section>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white subrayado" href="https://www.unab.cl/"> BEC and UNAB</a>
      </div>
    </footer>
  );
};

export default Footer;
