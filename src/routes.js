const express = require('express');

const routes = express.Router();

routes.use('/', (req, res) => {
  res.send('Hy! Now with routes!');
});

module.exports = routes;