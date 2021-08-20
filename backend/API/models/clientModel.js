const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clientSchema = Schema({
    _id:Schema.Types.ObjectId,
    fname: { type: String },
    mname: { type: String },
    lname: { type: String },
    email: { type: String },
    phone_number: { type: Number },
    mobile_number: { type: Number },
    driving_lic: { type: String },
    issue_date: { type: Date },
    address: [],
    credit_card:{
        card_type:{type:String},
        card_number:{type:Number}
    },
    bookings:[]
  
})

module.exports = mongoose.model("Client", clientSchema);