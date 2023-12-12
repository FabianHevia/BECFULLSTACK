const express = require('express');
const router = express.Router();
const Prestamo = require('../models/prestamoModelo.cjs');

// Obtener todas las reservas
router.get('/api/prestamos', async (req, res) => {
  try {
    const prestamos = await Prestamo.find();
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas' });
  }
});

// Crear una nueva reserva
router.post('/api/prestamos', async (req, res) => {
  console.log('Cuerpo de la solicitud:', req.body);

  const { id, usuario, fecha, plazo } = req.body;

  try {
    const nuevoPrestamo = new Prestamo({
      id,
      usuario,
      fecha,
      plazo,
    });

    const prestamoGuardado = await nuevoPrestamo.save();
    res.json(prestamoGuardado);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la reserva' });
  }
});

module.exports = router;