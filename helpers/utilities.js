// Establish required dependencies
const fs = require('fs');
const util = require('util');

// Function 'readFromFile' returns the value of 'fs.readFile' as a promise
const readFromFile = util.promisify(fs.readFile);

// Function 'writeToFile' will write data to a JSON file
const writeToFile = () => {
    console.log('write to file');
};

// Function 'readAndAppend' will append new data to existing JSON data
const readAndAppend = () => {
    console.log('read and append');
};

// Export
module.exports = { readFromFile, writeToFile, readAndAppend};
