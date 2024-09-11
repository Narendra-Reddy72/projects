require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://LibraryManagement:LibraryManagement@cluster0.uvdfkd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit process with failure
    }
};

mongoose.connection.on('error', (err) => {
    console.error('Database connection error:', err.message);
});

module.exports = connectDB;
