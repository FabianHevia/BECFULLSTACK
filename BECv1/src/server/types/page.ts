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
    nombre: String!
    rut: String!
    contacto: String!
    email: String!
    password: String!
  }

  type Inicio {
    nombre: String!
    rut: String!
    contacto: String!
    email: String!
    password: String!
  }

  type Prestamo {
    id: String!
    usuario: String!
    fecha: String!
    plazo: String!
  }

  type Query {
    documentos: [Documento]
    noticias: [Noticia]
    reserva: [Reserva]
    registros: [Registro]
    inicio: [Inicio]
    prestamo: [Prestamo]
  }

  type Mutation {
    agregarDocumento(title: String!, author: String!, type: String!, category: String!): Documento
    agregarNoticia(titulo: String!, resumen: String!, fecha: String!): Noticia
    agregarReserva(bookID: String!, deliveryDate: String!, requestType: String!): Reserva
    agregarRegistro(nombre: String!, rut: String!, contacto: String!, email: String!, password: String!): Registro
    agregarInicio(nombre: String!, rut: String!, contacto: String!, email: String!, password: String!): Inicio
    agregarPrestamo(id: String!, usuario: String!, fecha: String!, plazo: String!): Prestamo
  }
`;

module.exports = typeDefs;