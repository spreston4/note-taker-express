// Required dependencies
const express = require('express');

// Set up express
const app = express();
const PORT = 3000;

// Basic route
app.get('/', function (req, res) {
    res.send('hello world')
  });

// Start server

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));