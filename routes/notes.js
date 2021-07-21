// Establish required dependancies
const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend} = require('../helpers/utilities');

// GET route to retrieve all notes
notes.get('/', (req, res) => {
    
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route to to create a new note
notes.post('/', (req, res) => {
    res.send('POST NOTE');
});

// Export
module.exports = notes;