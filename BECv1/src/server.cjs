const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Documento = require('./src/models/documentoModelo.js');
const calendarioRoutes = require('./src/models/Mcalendario/calendarioRoutes.js');
const Noticia = require('./src/models/noticiasModelo.js');
const Reservation = require('/src/models/reservaModelo.js');

const app = express();

// Ruta para obtener documentos
app.get('/api/documentos', async (req, res) => {
  try {
    const documentos = await DocumentoModel.find(); // Obtener todos los documentos de la base de datos
    res.json(documentos); // Enviar los documentos como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los documentos' });
  }
});


app.get('/api/noticias', async (req, res) => {
  try {
    const noticias = await Noticia.find(); // Obtener todas las noticias de la base de datos
    res.json(noticias); // Enviar las noticias como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las noticias' });
  }
});

// Ruta para almacenar los datos del usuario
app.post('/api/registrar', async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario({
      correo,
      contraseña,
    });

    // Guardar el usuario en la base de datos
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
});

app.post('/api/reservar', async (req, res) => {
  const { bookID, deliveryDate, requestType } = req.body;

  try {
    const nuevaReserva = new Reservation({
      bookID,
      deliveryDate,
      requestType,
    });

    const reservaGuardada = await nuevaReserva.save();
    res.json(reservaGuardada);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la reserva' });
  }
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/becbs', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Definir el esquema GraphQL
const schema = buildSchema(`
  type Documento {
    _id: ID!
    tipoDocumento: String!
    categoria: String!
    titulo: String!
    autor: String!
    tema: String!
  }

  type Query {
    documentos: [Documento]
  }

  type Mutation {
    agregarDocumento(tipoDocumento: String!, categoria: String!, titulo: String!, autor: String!, tema: String!): Documento
  }
`);

// Modelos de Mongoose
const DocumentoModel = mongoose.model('Documento', {
  tipoDocumento: String,
  categoria: String,
  titulo: String,
  autor: String,
  tema: String,
});

// Resolver para la consulta de todos los documentos
const root = {
  documentos: async () => await DocumentoModel.find(),

  agregarDocumento: async ({ tipoDocumento, categoria, titulo, autor, tema }) => {
    const documento = new DocumentoModel({ tipoDocumento, categoria, titulo, autor, tema });
    await documento.save();
    return documento;
  },
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Habilitar GraphiQL en la ruta /graphql para probar consultas
}));

const usuarioSchema = new mongoose.Schema({
  correo: String,
  contraseña: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Middleware para manejar datos JSON
app.use(express.json());

// Rutas para las operaciones del calendario
app.use('/api/calendario', calendarioRoutes);


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
});