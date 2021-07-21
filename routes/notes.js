// Establish required dependancies
const notes = require('express').Router();

// GET route to retrieve all notes
notes.get('/', (req, res) => {
    res.send('GET NOTE');
});

// POST route to to create a new note
notes.post('/', (req, res) => {
    res.send('POST NOTE');
});

// Export
module.exports = notes;