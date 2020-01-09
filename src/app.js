const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const user = [
    { name: 'Admin', email: 'admin@adm.com' },
  ];
  res.status(200).json(user);
});

module.exports = app;
