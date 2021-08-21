const contact_usOb =require('../models/contact_usModel')
const mongoose = require('mongoose')

exports.getContact_us =async (req, res) => {
    try {
        const data = await contact_usOb.find()
        console.log(data);
        if (data) {
            res.status(200).json({
                code: 1,
                data: data,
                message: null,
                error: null
            })
        } else {
            res.status(404).json({
                code: 0,
                data: null,
                message: "somthing went wrong.",
                error: null
            })

        }
    }
    catch (err) {
        res.status(500).json({
            code: 0,
            data: null,
            message: "somthing went wrong.",
            error: err.message
        })

    }

}

exports.postCountact_us = async (req, res) => {
    try {
        console.log("hi");
        const contact = new contact_usOb({
            _id: mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message

        })
        console.log(contact);
        const data = await contact.save()
        res.status(201).json({
            code: 1,
            data: data,
            message: null,
            error: null
        })
    }
    catch (err) {
        res.status(500).json({
            code: 0,
            data: null,
            message: "somthing went wrong. 11",
            error: err.message
        })
    }
}