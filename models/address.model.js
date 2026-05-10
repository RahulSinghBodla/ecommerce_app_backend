const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    address: {type: String, required: true},
    landmark: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    pin: {type: Number, required: true}
})

const AddressModel = new mongoose.model("AddressModel", addressSchema)
module.exports = AddressModel