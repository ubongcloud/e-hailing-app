const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let rides = [];

app.post('/rides', (req, res) => {
    const ride = req.body;
    rides.push(ride);
    res.json({ message: 'Ride requested successfully' });
});

app.get('/rides', (req, res) => {
    res.json(rides);
});

app.listen(5001, () => {
    console.log('Ride Service running on port 5001');
});