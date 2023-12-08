const Calendario = require('../models/calendarioModelo.cjs');

const calendarioResolver = {
  Query: {
    calendario: async () => {
      try {
        const calendarios = await Calendario.find();
        return calendarios;
      } catch (error) {
        throw new Error('Error al obtener los calendarios');
      }
    },
  },
};

module.exports = calendarioResolver;