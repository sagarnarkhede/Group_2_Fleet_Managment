const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const airportSchema = Schema({
    _id:Schema.Types.ObjectId,
    airportname: { type: String },
    airportno: { type: String },
    nearestcenter: []
})

module.exports = mongoose.model("Airport", airportSchema);