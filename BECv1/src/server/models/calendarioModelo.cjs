const mongoose = require('mongoose');

const CalendarioSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },
  // Otros campos del calendario si es necesario
});

const Calendario = mongoose.model('Calendario', CalendarioSchema);

module.exports = Calendario;