const mongoose = require('mongoose');

var Client = mongoose.model('Client', {
    fname: { type: String },
    mname: { type: String },
    lname: { type: String },
    address1: { 
            street : {type: String},
            city : {type: String} ,
            zip: { type: Number }, 
            state : {type: String} ,
            country : {type: String}
    },
    address2: { 
        street : {type: String},
        city : {type: String} ,
        zip: { type: Number }, 
        state : {type: String} ,
        country : {type: String}
},
    email: { type: String , unique: true},
    phone_number: { type: Number },
    mobile_number: { type: Number },
    credit_card :
        {
            credit_card_type: { type: String },
            card_number: { type: Number }       
    },
    driving_lic: { type: String },
    issue_date: { type: Date }
});

module.exports = { Client };