const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const clientSchema = Schema({
    _id: Schema.Types.ObjectId,
    first_name: { type: String },
    last_name: { type: String },
    phone: { type: Number },
    email: { type: String },
    subject: { type: String },
    message: { type: String }

})
module.exports = mongoose.model("Contact_us", clientSchema);
