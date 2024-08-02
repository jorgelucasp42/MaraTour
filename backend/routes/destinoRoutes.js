const express = require('express');
const router = express.Router();
const Destino = require('../models/destino');

// Obter todos os destinos
router.get('/', async (req, res) => {
    try {
        const destinos = await Destino.find();
        res.json(destinos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obter um destino por slug
router.get('/:slug', async (req, res) => {
    try {
        const destino = await Destino.findOne({ slug: req.params.slug });
        if (!destino) return res.status(404).json({ message: 'Destino não encontrado' });
        res.json(destino);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
