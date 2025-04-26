const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const analyze = require('./analyze');

const app = express();
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rota API
app.use('/api', analyze);

// Se alguém acessar '/', entrega o index.html da public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
