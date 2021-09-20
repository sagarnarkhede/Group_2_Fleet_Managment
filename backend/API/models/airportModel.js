const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const airportSchema = Schema({
    _id:Schema.Types.ObjectId,
    airportname: { type: String ,default:null},
    airportno: { type: String ,default:null},
    nearestcenter: []
})

module.exports = mongoose.model("Airport", airportSchema);