const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const officeSchema = Schema({
    _id:Schema.Types.ObjectId,
    fname: { type: String },
    mname: { type: String },
    lname: { type: String },
    email: { type: String },
    address: {type:String },
    city:{type:String},
    zip: { type: Number },
    idproof:{type:String},
    centername:{type:String} ,
    username:{type:String},

    password: {type: String},
  
  
})

module.exports = mongoose.model("office", officeSchema);