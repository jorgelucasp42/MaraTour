const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const destinoRoutes = require('./routes/destinoRoutes');
const atrativoRoutes = require('./routes/atrativoRoutes');
const errorHandler = require('./utils/errorHandler');

// Conectar ao banco de dados
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/destinos', destinoRoutes);
app.use('/api/atrativos', atrativoRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
