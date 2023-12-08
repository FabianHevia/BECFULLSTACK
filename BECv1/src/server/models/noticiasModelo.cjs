const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema({
  titulo: String,
  resumen: String,
  fecha: String,
});

const Noticia = mongoose.model('Noticia', NoticiaSchema);

module.exports = Noticia;