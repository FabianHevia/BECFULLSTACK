const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

const calendarioRoutes = require('./models/MCalendario/calendarioRoutes.cjs');
const Noticia = require('./models/noticiasModelo.cjs');
const Reservation = require('./models/reservaModelo.cjs');

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

app.post('/api/solicitar-prestamo', async (req, res) => {
  const { bookID, requestType } = req.body; // Ajusta esto según los campos que esperas en la solicitud

  try {
    const nuevaSolicitud = new Reservation({
      bookID,
      requestType
      // Aquí puedes agregar otros campos de solicitud si los necesitas
    });

    const solicitudGuardada = await nuevaSolicitud.save();
    res.json(solicitudGuardada);
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar la solicitud de préstamo' });
  }
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/becbs', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Documentos

const schemaDocumento = buildSchema(`
  type Documento {
    _id: ID!
    title: String!
    author: String!
    type: String!
    category: String!
  }

  type Query {
    documentos: [Documento]
  }

  type Mutation {
    agregarDocumento(title: String!, author: String!, type: String!, category: String!): Documento
  }
`);

// Modelos de Mongoose
const DocumentoModel = mongoose.model('Documento', {
  title: String,
  author: String,
  type: String,
  category: String,
});

const rootDocumento = {
  documentos: async () => await DocumentoModel.find(),

  agregarDocumento: async ({ title, author, type, category }) => {
    const documento = new DocumentoModel({ title, author, type, category });
    await documento.save();
    return documento;
  },
};

//Noticias

const schemaNoticias = buildSchema(`
  type Noticia {
    _id: ID!
    titulo: String!
    resumen: String!
    fecha: String!
  }

  type Mutation {
    agregarNoticia(titulo: String!, resumen: String!, fecha: String!): Noticia
  }
`);

const rootNoticias = {
  agregarNoticia: async ({ titulo, resumen, fecha }) => {
    try {
      const nuevaNoticia = new Noticia({
        titulo,
        resumen,
        fecha,
      });

      const noticiaGuardada = await nuevaNoticia.save();
      return noticiaGuardada;
    } catch (error) {
      throw new Error('Error al guardar la noticia');
    }
  },
};

const Schema = `
  type Documento {
    _id: ID!
    title: String!
    author: String!
    type: String!
    category: String!
  }

  type Noticia {
    _id: ID!
    titulo: String!
    resumen: String!
    fecha: String!
  }

  type Query {
    documentos: [Documento]
  }

  type Mutation {
    agregarDocumento(title: String!, author: String!, type: String!, category: String!): Documento
    agregarNoticia(titulo: String!, resumen: String!, fecha: String!): Noticia
  }
`;

const mergedSchema = buildSchema(Schema);

const usuarioSchema = new mongoose.Schema({
  correo: String,
  contraseña: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = {schemaNoticias, schemaDocumento};

const mergedRoot = {
  ...rootDocumento,
  ...rootNoticias,
};

router.use('/graphql', graphqlHTTP({
  schema: mergedSchema,
  rootValue: mergedRoot,
  graphiql: true, // Habilitar GraphiQL
}));

app.use('/', router);

app.use(express.json());

app.use('/api/calendario', calendarioRoutes);
// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
});