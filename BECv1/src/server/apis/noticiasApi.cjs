const express = require('express');
const router = express.Router(); // Define un nuevo Router

const Noticia = require('../models/noticiasModelo.cjs');

router.get('/api/noticias', async (req, res) => {
  try {
    const noticias = await Noticia.find({}, );
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las noticias' });
  }
});

module.exports = router;