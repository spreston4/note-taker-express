// Required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Set up express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Start server
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

// Notes.html route
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));

// Route to return notes data from db.json
app.get('/api/notes', (req, res) => {
    
    // const allNotes = getDb('db.json');

    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // res.end(allNotes);

    res.sendFile(path.join(__dirname, '../../../db/db.json'));
});

app.post('/api/notes', (req, res) => {

    const newNote = {
        "title": req.body.title,
        "text": req.body.text
    };
    
    console.log('New Note');
    console.log(newNote);
    // // Get current notes
    // fs.readFile(path.join(__dirname, '../../../db/db.json'), 'utf8', (err, data) => {
    //     // Append new note to previous noites
    
    //     // save newly extended collection back to bd
    // });

    res.send('POST NOTES');
});

// Catch all route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));

// Function 'getDb' reads and returns 
const getDb = (name) => {

    return fs.readFileSync(path.join(__dirname, `../../../db/${name}`), 'utf8', (err, data) => (err) ? console.error(err) : data);
}


