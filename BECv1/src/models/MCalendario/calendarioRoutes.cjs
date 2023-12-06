const express = require('express');
const router = express.Router();
const calendarioController = require('./calendarioController.cjs');

// Ruta para crear un nuevo evento en el calendario
router.post('/crear', calendarioController.crearEvento);

// Ruta para obtener todos los eventos del calendario
router.get('/eventos', calendarioController.obtenerEventos);

module.exports = router;