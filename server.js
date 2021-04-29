require('dotenv').config();
const express = require('express');

// Routes
const habitRoutes = require('./routes/api/habits');

// Create instance of express app
const app = express();

// Middleware
app.use(express.json());
app.use('/api/habits', habitRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));