
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "minimalistalldata" },
    quantity: { type: Number, default: 1 },
    price: Number,
    total: Number,
  },
  { timestamps: true }
);

const Cart1 = mongoose.model("cart", CartSchema);
// module.exports = mongoose.model("cart", CartSchema);

module.exports = Cart1;