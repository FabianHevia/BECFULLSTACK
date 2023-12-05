const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/catalogoDB', { useNewUrlParser: true, useUnifiedTopology: true });
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

// Configurar Express
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Habilitar GraphiQL en la ruta /graphql para probar consultas
}));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
});
