const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
   productId: {type: String, required: true},
    name:{type: String, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    category: {type: String, required: true},
    discountPercentage: {type: Number, required: true},
    quantity: {type: Number, required: true},
})

const CartModel = new mongoose.model("CartModel", cartSchema);
module.exports = CartModel;