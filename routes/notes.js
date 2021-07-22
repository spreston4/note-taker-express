// Establish required dependancies
const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend} = require('../helpers/utilities');
const { v4: uuidv4 } = require('uuid');

// GET route to retrieve all notes
notes.get('/', (req, res) => {
    
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route to to create a new note
notes.post('/', (req, res) => {

    // Create new note
    const newNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uuidv4()
    };

    // Add new note to database
    readAndAppend('./db/db.json', newNote);

    // Send success message / refresh page to load not in note list
    res.json('Note saved!');

});

notes.delete('/:id', (req, res) => {
    
    // Get tip id

    // Get info from db

    // Create array & filter for id to be deleted

    // Write filtered array to db

    // Send success & refresh page
});

// Export
module.exports = notes;