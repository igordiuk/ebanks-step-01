const express = require('express');
const app = express();

const accountRoutes = require('./routes/accountRoutes');

app.use(express.json());
app.use('/', accountRoutes);

module.exports = app;