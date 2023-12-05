import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="imagen3 position-relative translate-middle-x start-50 mt-4 img-ajustado" src="Fondo-removebg-preview.png" alt="BECSINCE" />
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="position-relative translate-middle-x start-50 mt-5 mb-5 tamanoletra">
              Somos una librería de altos estándares dedicada a fomentar la pasión por la lectura y el conocimiento. Nuestra misión es ofrecer a nuestros clientes una amplia selección de libros de calidad, desde los clásicos más emblemáticos hasta las novedades literarias más emocionantes. Con un equipo apasionado por la literatura y un compromiso inquebrantable con la excelencia en el servicio al cliente, estamos aquí para ser tu destino literario de confianza. Descubre un mundo de historias, conocimiento y aventuras en cada visita a nuestra librería. ¡Te esperamos con los brazos abiertos para compartir el placer de la lectura!
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col container">
            <img className="imagen1" src='MinisterioCulturaArtesPatrimonio.png' alt="GOVERMENT" />
          </div>
          <div className="col">
            <img className="imagen2" src="EstacionCentral.png" alt="ESTACIONCENTRAL" />
          </div>
        </div>
        </div>
        <hr></hr>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2023 Copyright:
        <a className="text-white subrayado" href="https://www.unab.cl/"> BEC and UNAB</a>
      </div>
    </footer>
  );
};
export default Footer;