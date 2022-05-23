const express = require('express');
const routes = require('./routes')

const db = require('./database')

const app = express();

const port = 3000;

db.hasConnection();

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}`);
  });