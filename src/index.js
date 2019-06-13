const express = require('express');

const app = new express();

app.use('/', (req, res) => {
  res.send('Hy Vitor!!');
});

app.listen(3333);