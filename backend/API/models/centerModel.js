const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centerdetailsSchema = Schema({
    _id: Schema.Types.ObjectId,
    centerid: { type: Number},
    centername: { type: String},
    state: { type: String},
    city: { type: String},
    zip: { type: Number},
    address: { type: String},
    telphone: { type: Number},
    officetime: { type:String },
    weeklyoff: { type: String},
    cars: []
})

module.exports = mongoose.model("Center", centerdetailsSchema);