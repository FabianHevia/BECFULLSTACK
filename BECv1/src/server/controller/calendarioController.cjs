const calendarioModelo = require('../models/calendarioModelo.cjs');

const calendarioController = async () => {
  try {
    const documentos = await calendarioModelo.find();
    return documentos;
  } catch (error) {
    throw new Error('Error al obtener los documentos');
  }
};

module.exports = { calendarioController };
