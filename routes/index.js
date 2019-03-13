const paymentApi = require('./payment');

const configureRoutes = app => {
    app.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next()
    });
    paymentApi(app);
};

module.exports = configureRoutes;