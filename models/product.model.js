const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    productcategory: {type: String, required: true},
    size: [{type: String, required: true}],
    discountPercentage: {type: Number, required: true},
    description: [
            {type: String,
            required: true}
        ]
})

const ProductModel = new mongoose.model("ProductModel", productSchema)

module.exports = ProductModel