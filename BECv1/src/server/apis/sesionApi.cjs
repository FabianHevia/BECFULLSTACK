const express = require('express');
const router = express.Router();
const Inicio = require('../models/sesionModelo.cjs');

// Obtener todas las registro
router.get('/api/inicio', async (req, res) => {
  try {
    const inicio = await Inicio.find();
    res.json(inicio);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las registros' });
  }
});

router.post('/api/inicio', async (req, res) => {
  console.log('Cuerpo de la solicitud registro:', req.body);
  const { nombre, rut, contacto, email, password } = req.body;

  // Verificar si todas las propiedades están presentes en req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos para el registro' });
  }

  try {
    const nuevoInicio= new Inicio({
      nombre,
      rut,
      contacto,
      email,
      password,
    });

    const InicioValidado = await nuevoInicio.save();
    res.json(InicioValidado);
  } catch (error) {
    res.status(500).json({ message: 'Error al validar el registro' });
  }
});

module.exports = router;