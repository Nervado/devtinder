const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController')

routes.get('/', (req, res) => {
    return res.json({ messange: `Hello ${req.query.name}` })
});

routes.post('/devs', DevController.store);

module.exports = routes;

// mongodb+srv://nervado:<password>@cluster0-iugse.mongodb.net/test?retryWrites=true&w=majority