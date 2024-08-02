const express = require('express');
const connectDB = require('./config/database');
const destinoRoutes = require('./routes/destinoRoutes');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Conectar ao banco de dados
connectDB();

app.use(express.json());

// Rotas
app.use('/api/destinos', destinoRoutes);

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
