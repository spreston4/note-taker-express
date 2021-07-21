// Establish required dependencies
const express = require('express');

// Set up express
const app = express();

// Define routers
const notesRouter = require('./notes');

// Use routers
app.use('/notes', notesRouter);

// Export 
module.exports = app;