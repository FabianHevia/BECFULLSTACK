const express = require('express');
const router = express.Router(); // Define un nuevo Router

const Reserva = require('../models/reservaModelo.cjs');

app.post('/api/reservar', async (req, res) => {
    const { bookID, deliveryDate, requestType } = req.body;

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