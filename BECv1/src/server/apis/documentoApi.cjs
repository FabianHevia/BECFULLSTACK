const express = require('express');
const router = express.Router(); // Define un nuevo Router

const Documento = require('../models/documentoModelo.cjs');

router.get('/api/documentos', async (req, res) => {
    try {
        const documentos = await Documento.find();
        res.json(documentos);
    }   catch (error) {
        res.status(500).json({ message: 'Error al obtener los documentos' });
    }
});

module.exports = router;
