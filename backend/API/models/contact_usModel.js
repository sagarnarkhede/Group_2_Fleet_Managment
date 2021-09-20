const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const clientSchema = Schema({
    _id: Schema.Types.ObjectId,
    first_name: { type: String ,default:null},
    last_name: { type: String ,default:null},
    phone: { type: Number ,default:0},
    email: { type: String ,default:null},
    subject: { type: String, default:null },
    message: { type: String ,default:null }

})
module.exports = mongoose.model("Contact_us", clientSchema);
