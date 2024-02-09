const mongoose = require('mongoose');
const { Schema } = mongoose;

// define the User model schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    }
},
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('products', userSchema);