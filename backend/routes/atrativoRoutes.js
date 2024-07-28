const express = require('express');
const router = express.Router();
const atrativoController = require('../controllers/atrativoController');

// Rota para obter todos os atrativos
router.get('/', atrativoController.getAllAtrativos);

// Rota para obter um atrativo por ID
router.get('/:id', atrativoController.getAtrativoById);

// Rota para criar um novo atrativo
router.post('/', atrativoController.createAtrativo);

// Rota para atualizar um atrativo
router.put('/:id', atrativoController.updateAtrativo);

// Rota para deletar um atrativo
router.delete('/:id', atrativoController.deleteAtrativo);

module.exports = router;
