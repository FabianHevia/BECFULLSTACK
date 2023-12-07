const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const mongoose = require('mongoose');
const express = require('express');

const calendarioRoutes = require('./models/MCalendario/calendarioRoutes.cjs');
const Noticia = require('./models/noticiasModelo.cjs');
const Reservation = require('./models/reservaModelo.cjs');

const app = express();
const router = express.Router();

const typeDefs = gql `
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
    noticias: [Noticia]
  }

  type Mutation {
    agregarDocumento(title: String!, author: String!, type: String!, category: String!): Documento
    agregarNoticia(titulo: String!, resumen: String!, fecha: String!): Noticia
  }
`;

// Resolver para los campos definidos en el esquema
const resolvers = {
  Query: {
    documentos: async () => {
      try {
        // Implementa la lógica para obtener documentos
      } catch (error) {
        throw new Error('Error al obtener los documentos');
      }
    },
    noticias: async () => {
      try {
        const noticias = await Noticia.find({}, 'titulo resumen fecha');
        return noticias;
      } catch (error) {
        throw new Error('Error al obtener las noticias');
      }
    },
  },
  Mutation: {
    agregarDocumento: async (_, args) => {
      try {
        // Implementa la lógica para agregar un documento
      } catch (error) {
        throw new Error('Error al agregar el documento');
      }
    },
    agregarNoticia: async (_, args) => {
      try {
        const nuevaNoticia = new Noticia({
          titulo: args.titulo,
          resumen: args.resumen,
          fecha: args.fecha,
        });
        const noticiaGuardada = await nuevaNoticia.save();
        return noticiaGuardada;
      } catch (error) {
        throw new Error('Error al guardar la noticia');
      }
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/bec/graphql' });
}

// Habilitar CORS para todas las solicitudes
startApolloServer()
  .then(() => {
    // Habilitar CORS para todas las solicitudes
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Reemplaza esto con tu dominio
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    // Ruta para obtener documentos
    app.get('/api/documentos', async (req, res) => {
      try {
        const documentos = await DocumentoModel.find();
        res.json(documentos);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener los documentos' });
      }
    });

    // Ruta para obtener noticias
    app.get('http://localhost:3000/api/noticias', async (req, res) => {
      try {
        const noticias = await Noticia.find({}, );
        res.json(noticias);
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

  module.exports = {  schema, rootDocumento, rootNoticias };

  app.use('/', router);

  app.use(express.json());

  app.use('/api/calendario', calendarioRoutes);

  // Conectar a MongoDB
  mongoose.connect('mongodb://localhost:27017/becbs');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  const PORT = 3000;

  // Iniciar el servidor
  app.listen({ port: PORT }, () => {
    console.log(`Servidor Apollo Server en http://localhost:${PORT}${server.graphqlPath}`);
  });
}).catch((error) => {
  console.error('Error al iniciar el servidor Apollo:', error);
});