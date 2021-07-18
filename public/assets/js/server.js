// Required dependencies
const express = require('express');
const path = require('path');

// Set up express
const app = express();
const PORT = 3000;

// Basic route
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));

// Start server
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));