const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');

//Configuration
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;

//Types
const typeDefs = require('./types/page.ts');

//Noticias
const { noticiasQueryResolver, agregarNoticiaMutationResolver } = require('./resolvers/noticiasResolver.cjs');
const noticiasApi = require('./apis/noticiasApi.cjs');

//Documentos
const { documentosQueryResolver, agregarDocumentoMutationResolver} = require('./resolvers/documentoResolver.cjs');
const documentoApi = require('./apis/documentoApi.cjs');

//Calendario
const calendarioRoutes = require('./resolvers/calendarioResolver.cjs');
const Reservation = require('./models/reservaModelo.cjs');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      noticias: noticiasQueryResolver,
      documentos: documentosQueryResolver
    },
    Mutation: {
      agregarNoticia: agregarNoticiaMutationResolver,
      agregarDocumento: agregarDocumentoMutationResolver
    },
  },
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
    app.use('/', documentoApi);

    // Ruta para obtener noticias
    app.use('/', noticiasApi);

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

    module.exports = { schema };

    app.use('/', router);
    app.use(express.json()); 

  // Conectar a MongoDB
    mongoose.connect('mongodb://localhost:27017/becbs');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // Iniciar el servidor
    app.listen({ port: PORT }, () => {
      console.log(`Servidor Apollo Server en http://localhost:${PORT}${server.graphqlPath}`);
    });
  }).catch((error) => {
    console.error('Error al iniciar el servidor Apollo:', error);
  });