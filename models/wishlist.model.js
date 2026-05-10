const mongoose = require("mongoose")

const wishlistSchema = mongoose.Schema({
    productId: {type: String, required: true},
    name:{type: String, required: true},
    price: {type: Number, required: true},
    discountPercentage: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    }
)

const WishlistModel = new mongoose.model("wishlistModel", wishlistSchema)

module.exports = WishlistModel