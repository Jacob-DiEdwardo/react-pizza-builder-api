const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live'
    : 'sk_test';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;