const express = require('express');
const router = express.Router();
const Reserva = require('../models/reservaModelo.cjs');

// Obtener todas las reservas
router.get('/api/reservas', async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas' });
  }
});

// Crear una nueva reserva
router.post('/api/reservas', async (req, res) => {
  console.log('Cuerpo de la solicitud:', req.body);

  const { bookID, deliveryDate, requestType } = req.body;

  // Verificar si todas las propiedades están presentes en req.body
  if (!bookID || !deliveryDate || !requestType) {
    return res.status(400).json({ message: 'Faltan datos requeridos para la reserva' });
  }

  try {
    const nuevaReserva = new Reserva({
      bookID,
      deliveryDate,
      requestType,
    });

    const reservaGuardada = await nuevaReserva.save();
    res.json(reservaGuardada);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la reserva' });
  }
});

module.exports = router;