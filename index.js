const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
// const connectDb = require('./config/db');
const mongoose = require("mongoose");

const app = express();

// connectDb();
// const port = process.env.DEV_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', require('./routes/user'));

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

mongoose.
    connect("mongodb+srv://lokesh:APmwBFjiPH0xrjCY@db-gpaas-dev.irusvcy.mongodb.net/db-gpaas-dev?retryWrites=true&w=majority")
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(3000, () => {
            console.log(`Node API app is running on port 3000`)
        });
    }).catch((error) => {
        console.log(error)
    })