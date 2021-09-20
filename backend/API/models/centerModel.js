const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centerdetailsSchema = Schema({
    _id: Schema.Types.ObjectId,
    centerid: { type: Number,default:0},
    centername: { type: String,default:null},
    state: { type: String, default:null},
    city: { type: String ,default:null},
    zip: { type: Number ,default:0},
    address: { type: String ,default:null},
    telphone: { type: Number ,default:0},
    officetime: { type:String ,default:null},
    weeklyoff: { type: String,default:null},
    cars: []
})

module.exports = mongoose.model("Center", centerdetailsSchema);