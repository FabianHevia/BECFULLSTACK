const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  bookID: Number,
  deliveryDate: String, // Puedes cambiar el tipo de dato si lo prefieres en formato Date o algún otro formato
  requestType: String, // Por ejemplo, reserva o solicitud
  plazo: String
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;