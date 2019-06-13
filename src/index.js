const express = require('express');
const mongoose = require('mongoose');

const app = new express();

mongoose.connect('mongodb+srv://vitosacramento:1JY1JyXh2M4vDviG@cluster0-eglsg.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

app.use(require('./routes'));

app.listen(3333);