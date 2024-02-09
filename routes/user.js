// routes/user.js
const express = require('express');
const router = express.Router();
const products = require('../models/user');

// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await products.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new user
router.post('/users', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new products({ email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;