const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('conectado ao mongodb');
    } catch(error) {
        console.error("erro ao conectar mongo", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;