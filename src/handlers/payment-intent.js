'use strict';

const { createPaymentIntent } = require("../services/stripe/payment-intent");

/**
 * Operations on v2/payment-intent
 */
module.exports = {
    /**
     * summary: Creates a PaymentIntent object.
     * description: After the PaymentIntent is created, attach a payment method and confirm to continue the payment. Learn more about the available payment flows with the Payment Intents API.
     * parameters: 
     * produces: 
     * responses: 200, 400
     */
    post: async function addPaymentIntent(request, h) {
        const paymentIntent = await createPaymentIntent(request.payload)
        if (paymentIntent) {
            return h.response(paymentIntent)
        }
        return h.response('something went wrong')
    }
};
