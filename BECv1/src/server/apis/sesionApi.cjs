const express = require('express');
const router = express.Router();
const Sesion = require('../models/sesionModelo.cjs');
  
router.get('/api/sesion', async (req, res) => {
  try {
    const sesiones = await Sesion.find();
    res.json(sesiones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las sesiones' });
  }
});

router.post('/api/sesion', async (req, res) => {
    console.log('Cuerpo de la solicitud sesion:', req.body);
    const { email, password } = req.body;
  
    try {
      const usuario = await Sesion.findOne({ email });
  
      if (!usuario) {
        return res.status(404).json({ message: 'Credenciales inválidas' });
      }
  
      const match = await bcrypt.compare(password, usuario.password);
      if (!match) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
  
      // Aquí las credenciales son correctas, puedes generar un token JWT para autenticación, o responder con éxito, dependiendo de tu lógica de aplicación.
  
      res.json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      res.status(500).json({ message: 'Error al validar el inicio de sesión' });
    }
  });
  
module.exports = router;