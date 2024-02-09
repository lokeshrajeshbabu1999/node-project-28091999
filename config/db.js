// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URI;
console.log('MongoDB connection string:', url);

const connectDb = async () => {
    try {
        if (!url) {
            throw new Error('MongoDB connection string is undefined');
        }

        await
            mongoose.set("strictQuery", false),
            mongoose.connect(url, {

                // useNewUrlParser: true,
                // useUnifiedTopology: true,
            });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
