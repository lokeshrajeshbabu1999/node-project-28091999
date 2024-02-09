const express = require('express');
const app = express();

const port = process.env.DEV_PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "hey": 'Hello dockererrr hai hai  hai hai hai i  am lokesh !' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});