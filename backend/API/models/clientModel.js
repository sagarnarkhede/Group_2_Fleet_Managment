const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clientSchema = Schema({
    _id:Schema.Types.ObjectId,
    fname: { type: String },
    mname: { type: String },
    lname: { type: String },
    email: { type: String },
    date_of_birth: { type: String },
    password: {type: String},
    phone_number: { type: Number },
    mobile_number: { type: Number },
    address1: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number },
    credit_card:{
        card_type:{type:String},
        card_number:{type:Number}
    },
    driving_lic: { type: String },
    IDP: { type: String },
    driving_issued_by: { type: String },
    driving_valid: { type: Date },
    passport_number: { type: Number },
    passport_valid: { type: Date },
    passport_issued_by: { type: String },
    passport_date: { type: String },
    

    bookings:[]
  
})

module.exports = mongoose.model("Client", clientSchema);