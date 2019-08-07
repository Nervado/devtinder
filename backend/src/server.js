const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')
const server = express();

// Connect database using a connection string
mongoose.connect('mongodb+srv://nervado:nervado@cluster0-iugse.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    // Parse JSON
server.use(express.json());
// Load routes
server.use(routes);
// Listen at Door 
server.listen(3000);