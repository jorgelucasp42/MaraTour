const mongoose = require('mongoose');

const atrativoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true }, // e.g., "praia", "monumento", "museu", etc.
  descricao: { type: String, required: true },
  dicas: { type: String },
  imagem: { type: String, required: true },
  destino: { type: mongoose.Schema.Types.ObjectId, ref: 'Destino', required: true }
});

module.exports = mongoose.model('Atrativo', atrativoSchema);
