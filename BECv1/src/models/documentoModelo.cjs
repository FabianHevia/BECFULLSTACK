const mongoose = require('mongoose');

// Define el esquema para los documentos
const DocumentoSchema = new mongoose.Schema({
  title: String,
  author: String,
  type: String,
  category: String,
});

// Crea el modelo basado en el esquema definido
const Documento = mongoose.model('Documento', DocumentoSchema);

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/Library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ejemplo de cómo crear un nuevo documento y guardarlo en la base de datos
const nuevoDocumento = new Documento({
  title: 'Viaje a las Estrellas',
  author: 'Alicia Novak',
  type: 'Novela',
  category: 'Ciencia Ficción',
});

// Guardar el nuevo documento en la base de datos
nuevoDocumento.save()
  .then((result) => {
    console.log('Documento guardado:', result);
  })
  .catch((error) => {
    console.error('Error al guardar el documento:', error);
  });