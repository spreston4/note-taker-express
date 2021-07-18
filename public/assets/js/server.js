// Required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Set up express
const app = express();
const PORT = 3000;

// Basic route
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));

app.get('/api/notes', (req, res) => {
    
    const allNotes = getDb('db.json');
    res.end(allNotes);
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));

// Start server
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

// Function 'getDb' reads and returns 
const getDb = (name) => {

    return fs.readFileSync(path.join(__dirname, `../../../db/${name}`));
}