const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  bookID: String,
  deliveryDate: String,
  requestType: String,
}, { timestamps: true });

const Reserva = mongoose.model('Reserva', ReservaSchema);

module.exports = Reserva;