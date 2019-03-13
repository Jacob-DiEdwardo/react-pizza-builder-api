const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1 || !origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
  app.use(bodyParser.json());
  app.options('*', cors())
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
  app.use(cors(corsOptions));
}

module.exports = configureServer;