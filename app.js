const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

configureServer(app);
configureRoutes(app);

app.use(helmet());
app.use(compression());

app.listen(SERVER_CONFIGS.PORT, error => {
    if (error) throw error;
    console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});