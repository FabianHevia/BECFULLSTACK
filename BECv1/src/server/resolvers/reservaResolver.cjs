const { Reserva } = require('../models/reservaModelo.cjs');

const reservaQueryResolver = async () => {
    try {
      // Lógica para obtener las reservas desde la base de datos
      const reservas = await Reserva.find({}, '_id fecha');
      return reservas;
    } catch (error) {
      throw new Error('Error al obtener las reservas');
    }
  };
  
  const agregarReservaMutationResolver = async (_, args) => {
    try {
      const nuevaReserva = new Reserva({
        bookID: args.bookID, deliveryDate: args.deliveryDate, requestType: args.requestType,
      });
  
      const reservaGuardada = await nuevaReserva.save();
      return reservaGuardada;
    } catch (error) {
      throw new Error('Error al guardar la reserva');
    }
  };
  
module.exports = { reservaQueryResolver, agregarReservaMutationResolver };