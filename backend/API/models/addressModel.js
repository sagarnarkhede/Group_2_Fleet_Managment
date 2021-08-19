const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const addressSchema = Schema({
    _id:Schema.Types.ObjectId,
    add: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number }
})

module.exports = mongoose.model("Address", addressSchema);