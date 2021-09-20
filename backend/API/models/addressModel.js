const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const addressSchema = Schema({
    _id:Schema.Types.ObjectId,
    add: { type: String , default:null },
    city: { type: String ,default:null},
    state: { type: String ,default:null},
    zip: { type: Number,default:0 }
})

module.exports = mongoose.model("Address", addressSchema);