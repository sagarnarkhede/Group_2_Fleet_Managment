const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Client } = require('../models/Client');

router.get('/', (req, res) => {

    Client.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('error in retriving Client :' + JSON.stringify(err, undefined, 2)); }

    });

});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id }');

    Client.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in retriving Client :' + JSON.stringify(err, undefined, 2)); }
    });

});

router.post('/', (req, res) => {
    var client = new Client({
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        add1: req.body.add1,
        add2: req.body.add2,
        email: req.body.email,
        city: req.body.city,
        zip: req.body.zip,
        phone_number: req.body.phone_number,
        mobile_number: req.body.mobile_number,
        Credit_Card_type: req.body.Credit_Card_type,
        card_number: req.body.card_number,
        driving_lic: req.body.driving_lic,
        issue_date: req.body.issue_date
    });
    client.save((err, doc) => {
        if (!err) { res.send(docs); } else { console.log('error in Client save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;