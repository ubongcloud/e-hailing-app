const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let riders = [];

app.post('/riders', (req, res) => {
    const rider = req.body;
    riders.push(rider);
    res.json({ message: 'Rider registered successfully' });
});

app.post('/riders/login', (req, res) => {
    const { email, password } = req.body;
    const rider = riders.find(r => r.email === email && r.password === password);
    if (rider) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(5000, () => {
    console.log('Rider Service running on port 5000');
});