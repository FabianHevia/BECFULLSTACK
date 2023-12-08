const mongoose = require('mongoose');

// Define el esquema para los documentos
const modeloDocumento = new mongoose.Schema({
  title: String,
  author: String,
  type: String,
  category: String,
});

// Crea el modelo basado en el esquema definido
const Documento = mongoose.model('Documento', modeloDocumento);

module.exports = Documento;