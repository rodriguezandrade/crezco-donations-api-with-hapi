'use strict';

const { createPrice } = require("../services/stripe/create-price");


/**
 * Operations on v2/create-price
 */
module.exports = {
    post: async function newCreatePrice(request, h) {
        const price = await createPrice(request.payload);
        if (price) {
            return h.response(price)
        }
        return h.response('something went wrong')
    }
};
