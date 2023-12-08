const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  type Reserva {
    bookID: String!
    deliveryDate: String!
    requestType: String!
  }

  type Registro {
    email: String!
    password: String!
  }

  type Sesion {
    email: String!
    password: String!
  }

  type Query {
    documentos: [Documento]
    noticias: [Noticia]
    reserva: [Reserva]
    registros: [Registro]
    sesion: [Sesion]
  }

  type Mutation {
    agregarDocumento(title: String!, author: String!, type: String!, category: String!): Documento
    agregarNoticia(titulo: String!, resumen: String!, fecha: String!): Noticia
    agregarReserva(bookID: String!, deliveryDate: String!, requestType: String!): Reserva
    agregarRegistro(email: String!, password: String!): Registro
    agregarSesion(email: String!, password: String!): Sesion
  }
`;

module.exports = typeDefs;