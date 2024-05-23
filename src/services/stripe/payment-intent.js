const { stripe } = require("./stripe");

const createPaymentIntent = async (paymentIntent) => {
    return await stripe.paymentIntents.create(paymentIntent);
}

exports.createPaymentIntent = createPaymentIntent;
