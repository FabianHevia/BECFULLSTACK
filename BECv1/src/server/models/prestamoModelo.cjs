const mongoose = require('mongoose');

const SolicitudPrestamoSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    Usuario: {
      type: String,
    },
    fecha: {
      type: String,
      required: true,
    },
    plazo: {
      type: String,
      required: true,
    },
  });

  const SolicitudPrestamo = mongoose.model('SolicitudPrestamo', SolicitudPrestamoSchema);

  module.exports = SolicitudPrestamo;