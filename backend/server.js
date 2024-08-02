const express = require('express');
const connectDB = require('./config/database');
const destinoRoutes = require('./routes/destinoRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Conectar ao banco de dados
connectDB();

app.use(express.json());

// Rotas
app.use('/api/destinos', destinoRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
