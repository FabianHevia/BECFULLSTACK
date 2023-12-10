const express = require('express');
const router = express.Router();
const Registro = require('../models/registroModelo.cjs');

// Obtener todas las registro
router.get('/api/usuarios', async (req, res) => {
  try {
    const registros = await Registro.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las registros' });
  }
});

router.post('/api/usuarios', async (req, res) => {
  console.log('Cuerpo de la solicitud registro:', req.body);
  const { nombre, rut, contacto, email, password } = req.body;

  // Verificar si todas las propiedades están presentes en req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos para el registro' });
  }

  try {
    const nuevoRegistro= new Registro({
      nombre,
      rut,
      contacto,
      email,
      password,
    });

    const RegistroValidado = await nuevoRegistro.save();
    res.json(RegistroValidado);
  } catch (error) {
    res.status(500).json({ message: 'Error al validar el registro' });
  }
});

module.exports = router;