const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clientSchema = Schema({
    _id:Schema.Types.ObjectId,
    fname: { type: String ,default:null},
    lname: { type: String ,default:null},
    email: { type: String ,default:null},
    date_of_birth: { type: String ,default:null},
    password: {type: String ,default:null},
    phone_number: { type: Number ,default:0},
    mobile_number: { type: Number ,default:0},
    address1: { type: String ,default:null},
    address2: { type: String ,default:null},
    city: { type: String ,default:null},
    state: { type: String ,default:null},
    zip: { type: Number ,default:0},
    card_type:{type:String ,default:null},
    card_number:{type:Number ,default:0},
    driving_lic: { type: String ,default:null},
    IDP: { type: String ,default:null},
    driving_issued_by: { type: String ,default:null},
    driving_valid: { type: String,default:null },
    passport_number: { type: Number ,default:0},
    passport_valid: { type: String ,default:null},
    passport_issued_by: { type: String ,default:null},
    passport_date: { type: String ,default:null},
    

    bookings:[]
  
})

module.exports = mongoose.model("Client", clientSchema);