const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

console.log('Current directory:', __dirname);
console.log('Env file path:', path.resolve(__dirname, '.env'));

dotenv.config({ path: path.resolve(__dirname, '.env') });  // Carregar variáveis de ambiente do arquivo .env

console.log(`MONGO_URI: ${process.env.MONGO_URI}`);  // Adicione esta linha para depuração

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

connectDB();
