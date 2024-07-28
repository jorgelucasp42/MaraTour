const Destino = require('../models/destino');
const asyncHandler = require('../utils/asyncHandler');

// Obter todos os destinos
exports.getAllDestinos = asyncHandler(async (req, res) => {
  const destinos = await Destino.find();
  res.json(destinos);
});

// Obter um destino por ID
exports.getDestinoById = asyncHandler(async (req, res) => {
  const destino = await Destino.findById(req.params.id);
  if (!destino) return res.status(404).json({ message: 'Destino não encontrado' });
  res.json(destino);
});

// Criar um novo destino
exports.createDestino = asyncHandler(async (req, res) => {
  const destino = new Destino({
    nome: req.body.nome,
    descricao: req.body.descricao,
    localizacao: {
      latitude: req.body.localizacao.latitude,
      longitude: req.body.localizacao.longitude
    },
    imagem: req.body.imagem
  });
  const novoDestino = await destino.save();
  res.status(201).json(novoDestino);
});

// Atualizar um destino
exports.updateDestino = asyncHandler(async (req, res) => {
  const destino = await Destino.findById(req.params.id);
  if (!destino) return res.status(404).json({ message: 'Destino não encontrado' });

  destino.nome = req.body.nome || destino.nome;
  destino.descricao = req.body.descricao || destino.descricao;
  destino.localizacao.latitude = req.body.localizacao.latitude || destino.localizacao.latitude;
  destino.localizacao.longitude = req.body.localizacao.longitude || destino.localizacao.longitude;
  destino.imagem = req.body.imagem || destino.imagem;

  const destinoAtualizado = await destino.save();
  res.json(destinoAtualizado);
});

// Deletar um destino
exports.deleteDestino = asyncHandler(async (req, res) => {
  const destino = await Destino.findById(req.params.id);
  if (!destino) return res.status(404).json({ message: 'Destino não encontrado' });

  await destino.remove();
  res.json({ message: 'Destino deletado' });
});
