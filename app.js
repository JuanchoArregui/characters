const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');

const charactersRoute = require('./routes/characters.route');

// Import DB config
require('./config/db.config');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/characters', charactersRoute);

module.exports = app;
