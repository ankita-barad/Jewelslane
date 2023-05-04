const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: Number,
    },
  ],
});

const CartModel = mongoose.model("cart", cartSchema);
module.exports = { CartModel };
