const Atrativo = require('../models/atrativo');

// Obter todos os atrativos
exports.getAllAtrativos = async (req, res) => {
  try {
    const atrativos = await Atrativo.find().populate('destino');
    res.json(atrativos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter um atrativo por ID
exports.getAtrativoById = async (req, res) => {
  try {
    const atrativo = await Atrativo.findById(req.params.id).populate('destino');
    if (!atrativo) return res.status(404).json({ message: 'Atrativo não encontrado' });
    res.json(atrativo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar um novo atrativo
exports.createAtrativo = async (req, res) => {
  const atrativo = new Atrativo({
    nome: req.body.nome,
    tipo: req.body.tipo,
    descricao: req.body.descricao,
    dicas: req.body.dicas,
    imagem: req.body.imagem,
    destino: req.body.destino
  });
  try {
    const novoAtrativo = await atrativo.save();
    res.status(201).json(novoAtrativo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Atualizar um atrativo
exports.updateAtrativo = async (req, res) => {
  try {
    const atrativo = await Atrativo.findById(req.params.id);
    if (!atrativo) return res.status(404).json({ message: 'Atrativo não encontrado' });

    atrativo.nome = req.body.nome || atrativo.nome;
    atrativo.tipo = req.body.tipo || atrativo.tipo;
    atrativo.descricao = req.body.descricao || atrativo.descricao;
    atrativo.dicas = req.body.dicas || atrativo.dicas;
    atrativo.imagem = req.body.imagem || atrativo.imagem;
    atrativo.destino = req.body.destino || atrativo.destino;

    const atrativoAtualizado = await atrativo.save();
    res.json(atrativoAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deletar um atrativo
exports.deleteAtrativo = async (req, res) => {
  try {
    const atrativo = await Atrativo.findById(req.params.id);
    if (!atrativo) return res.status(404).json({ message: 'Atrativo não encontrado' });

    await atrativo.remove();
    res.json({ message: 'Atrativo deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
