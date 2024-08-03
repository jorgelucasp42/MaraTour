const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

console.log('Current directory:', __dirname);  // Adicionado para verificar o diretório atual
console.log('Env file path:', path.resolve(__dirname, '.env'));  // Adicionado para verificar o caminho do arquivo .env

dotenv.config({ path: path.resolve(__dirname, '.env') });

console.log(`MONGO_URI: ${process.env.MONGO_URI}`);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

connectDB();
