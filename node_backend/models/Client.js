const mongoose = require('mongoose');

var Client = mongoose.model('Client', {
    fname: { type: String },
    mname: { type: String },
    lname: { type: String },
    add1: { type: String },
    add2: { type: String },
    email: { type: String },
    city: { type: String },
    zip: { type: Number },
    phone_number: { type: Number },
    mobile_number: { type: Number },
    Credit_Card_type: { type: String },
    card_number: { type: Number },
    driving_lic: { type: String },
    issue_date: { type: Date }
});

module.exports = { Client };