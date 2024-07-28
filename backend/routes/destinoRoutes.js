const express = require('express');
const router = express.Router();
const destinoController = require('../controllers/destinoController');

// Rota para obter todos os destinos
router.get('/', destinoController.getAllDestinos);

// Rota para obter um destino por ID
router.get('/:id', destinoController.getDestinoById);

// Rota para criar um novo destino
router.post('/', destinoController.createDestino);

// Rota para atualizar um destino
router.put('/:id', destinoController.updateDestino);

// Rota para deletar um destino
router.delete('/:id', destinoController.deleteDestino);

module.exports = router;
