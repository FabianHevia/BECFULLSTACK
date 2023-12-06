const mongoose = require('mongoose');

// Definir el esquema del calendario
const CalendarioSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },
  // Otros campos del calendario si es necesario
});

// Crear el modelo basado en el esquema definido
const Calendario = mongoose.model('Calendario', CalendarioSchema);

module.exports = Calendario;