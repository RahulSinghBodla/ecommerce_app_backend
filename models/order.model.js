const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    Items: [
    {
    productId: {type: String, required: true},
    name:{type: String, required: true},
    price: {type: Number, required: true},
    discountPercentage: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String, required: true},
    address: {type: String, required: true},
    quantity: {type: String, required: true}
    }
    ]
})

const OrderModel = new mongoose.model("OrderModel", orderSchema)

module.exports = OrderModel