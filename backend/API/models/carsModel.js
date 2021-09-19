const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Cars = Schema({
    _id:Schema.Types.ObjectId,
    carname:{ type: String},
    carno: { type: Number},
    cartype: {type:String},
    seat_capacity:{ type: Number},
    fuelStatus: { type: Number},
    rateperday: { type: Number},
    rateperweek: { type: Number},
    ratepermonth: { type: Number},
    lastservice_date: { type: Date}
})

module.exports = mongoose.model("Cars", Cars);