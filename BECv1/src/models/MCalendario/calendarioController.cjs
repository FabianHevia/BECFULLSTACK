const Calendario = require('./calendarioModelo.cjs');

// Controlador para crear un nuevo evento en el calendario
exports.crearEvento = async (req, res) => {
  try {
    const { fecha } = req.body;
    const nuevoEvento = new Calendario({ fecha });
    await nuevoEvento.save();
    res.status(201).json({ mensaje: 'Evento creado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los eventos del calendario
exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Calendario.find();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};