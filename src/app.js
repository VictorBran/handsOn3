const express = require('express');

const router = require('./routes');
const db = require('./database');
const handleError = require('./middleware/handleError');


const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(router);
app.use(handleError);

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}`);
  });