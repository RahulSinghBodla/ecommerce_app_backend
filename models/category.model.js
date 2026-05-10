const mongoose = require("mongoose")
const categorySchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true}
})

const CategoryModel = new mongoose.model("CategoryModel", categorySchema)

module.exports = CategoryModel;