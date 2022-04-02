const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const router = require('./routes');

app.use('/api', router);

app.use(express.json());

app.listen(port);

console.log(`API escuchando en el puerto: ${port}`);