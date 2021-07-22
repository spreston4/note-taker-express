// Establish required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index.js');

// Set up express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use api route
app.use('/api', api);

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

// Notes.html route
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Catch all route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));