const express = require('express');
const bodyParser = require('body-parser');
const analyze = require('./analyze');

const app = express();
app.use(bodyParser.json());
app.use('/api', analyze);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

module.exports = app;