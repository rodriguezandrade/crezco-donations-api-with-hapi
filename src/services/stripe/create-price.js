const { stripe } = require("./stripe");

// https://docs.stripe.com/api/prices/create
const createPrice = async (price) => {
    return await stripe.prices.create(price);
}

exports.createPrice = createPrice;
