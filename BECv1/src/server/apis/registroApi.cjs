const express = require('express');
const router = express.Router(); // Define un nuevo Router

const Registrar = require('../models/registrarModelo.cjs');

router.post('/api/registrar', async (req, res) => {
    try {
      const { correo, contraseña } = req.body;
  
      // Crear un nuevo usuario
      const nuevoRegistrar = new Registrar({
        correo,
        contraseña,
      });
  
      // Guardar el usuario en la base de datos
      await nuevoRegistrar.save();
  
      res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al registrar el usuario' });
    }
  });

module.exports = router;