const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        res.status(200).send({ success: stripeRes });
    }
};

const paymentApi = app => {
    app.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next()
    });

    app.get('/', (req, res) => {
        res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() });
    });

    app.post('/', (req, res) => {
        stripe.charges.create(req.body, postStripeCharge(res));
    });

    return app;
};

module.exports = paymentApi;