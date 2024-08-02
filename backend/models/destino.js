const mongoose = require('mongoose');

const destinoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    localizacao: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    imagem: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Destino', destinoSchema);
