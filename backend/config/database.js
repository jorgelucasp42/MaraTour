const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://Maratour:Maratour@cluster0-shard-00-00.trsc3pl.mongodb.net:27017,cluster0-shard-00-01.trsc3pl.mongodb.net:27017,cluster0-shard-00-02.trsc3pl.mongodb.net:27017/maratour?ssl=true&replicaSet=atlas-10jz0m-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
