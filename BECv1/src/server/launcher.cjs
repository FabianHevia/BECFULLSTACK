const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');

//Configuration
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

//Types
const typeDefs = require('./types/page.ts');

//Noticias
const { noticiasQueryResolver, agregarNoticiaMutationResolver } = require('./resolvers/noticiasResolver.cjs');
const noticiasApi = require('./apis/noticiasApi.cjs');

//Documentos
const { documentosQueryResolver, agregarDocumentoMutationResolver } = require('./resolvers/documentoResolver.cjs');
const documentoApi = require('./apis/documentoApi.cjs');

//Prestamo

const { prestamoQueryResolver, agregarPrestamoMutationResolver } = require('./resolvers/prestamoResolvers.cjs');
const prestamoApi = require('./apis/prestamoApi.cjs');

//Reserva
const { reservaQueryResolver, agregarReservaMutationResolver } = require('./resolvers/reservaResolver.cjs');
const reservaApi = require('./apis/reservaApi.cjs');

//Registro
const { registrosQueryResolver, agregarRegistroMutationResolver } = require('./resolvers/registroResolver.cjs');
const registroApi = require('./apis/registroApi.cjs');

//Sesion
const { inicioQueryResolver, agregarInicioMutationResolver } = require('./resolvers/sesionResolver.cjs');
const sesionApi = require('./apis/sesionApi.cjs');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      noticias: noticiasQueryResolver,
      documentos: documentosQueryResolver,
      reserva: reservaQueryResolver,
      registros: registrosQueryResolver,
      inicio: inicioQueryResolver,
      prestamo: prestamoQueryResolver,
    },
    Mutation: {
      agregarNoticia: agregarNoticiaMutationResolver,
      agregarDocumento: agregarDocumentoMutationResolver,
      agregarReserva: agregarReservaMutationResolver,
      agregarRegistro: agregarRegistroMutationResolver,
      agregarInicio: agregarInicioMutationResolver,
      agregarPrestamo: agregarPrestamoMutationResolver,
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
    // Configuración de body-parser para manejar solicitudes JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // Habilitar CORS para todas las solicitudes
    app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true,
    }));

    app.use('/', documentoApi);
    app.use('/', noticiasApi);
    app.use('/', reservaApi);
    app.use('/', registroApi);
    app.use('/', prestamoApi);
    app.use('/', sesionApi);

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
