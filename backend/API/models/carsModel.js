const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Cars = Schema({
    _id:Schema.Types.ObjectId,
    carname:{ type: String,default:null},
    carno: { type: Number,default:0},
    cartype: {type:String,default:null},
    seat_capacity:{ type: Number,default:null},
    fuelStatus: { type: String,default:null},
    carStatus: {type: String,default:null}, 
    rateperday: { type: Number,default:0},
    rateperweek: { type: Number,default:0},
    ratepermonth: { type: Number, default:0},
    lastservice_date: { type: String,default:null}
})

module.exports = mongoose.model("Cars", Cars);