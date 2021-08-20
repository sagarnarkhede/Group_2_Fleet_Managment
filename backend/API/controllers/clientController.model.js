const mongoose = require('mongoose')
const Client = require('../models/clientModel');
const Address = require('../models/addressModel');
const Booking = require('../models/bookingModel');

exports.get_client = async (req, res) => {
    try {
        const data = await Client.find()
        if (data) {
            res.status(200).json({
                code: 1,
                data: data,
                message: null,
                error: null
            })
        }else{
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
            error: err
        })

    }

}

exports.post_client = async (req, res) => {
   
    try {
        const address1 = new Address({
            _id: mongoose.Types.ObjectId(),
            add:req.body.add1,
            city:req.body.city1,
            state:req.body.state1,
            zip:req.body.zip1
        })
        const address2 = new Address({
            _id: mongoose.Types.ObjectId(),
            add:req.body.add2,
            city:req.body.city2,
            state:req.body.state2,
            zip:req.body.zip2
        })
        const booking = new Booking({
            _id: mongoose.Types.ObjectId(),
            booking_id: req.body.booking_id,
            booking_date:req.body.booking_date,
            Drop_date:req.body.Drop_date,
            inhand_date:req.body.inhand_date,
            handover_date:req.body.handover_date,
            inhand_center: req.body.inhand_center,
            handover_center: req.body.handover_center,
            booking_status: req.body.booking_status,
            inhand_emp: req.body.inhand_emp,
            handover_emp: req.body.handover_emp,
            vehical_details: { 
               vehical_type:req.body.vehical_type, 
               vehical_number:req.body.vehical_number, 
               vehical_lastcervising_date:req.body.vehical_lastcervising_date, 
               vehical_desel_level:req.body.vehical_desel_level
            },
            invoice:{
                invoice_number:mongoose.Types.ObjectId(),
                charges:pyment_method.charges,
                pyment_method:req.body.pyment_method
            }
        })
        const client = new Client({
            _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,  
            email: req.body.email,
            phone_number: req.body.phone_number,
            mobile_number: req.body.mobile_number,
            driving_lic: req.body.driving_lic,
            issue_date: req.body.issue_date,
            address:[address1,address2],
            credit_card:{
                card_type:req.body.card_type,
                card_number:req.body.card_number,
            },
            bookings:[booking]
        })
        console.log(client);
        const data = await client.save()
       
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
            message: "somthing went wrong.",
            error: err
        })

    }

}

exports.get_clientById = async (req, res) => {
 
    try {
        const data =await Client.findById(req.params.clientId)
        if (data) {
            res.status(200).json({
                code: 1,
                data: data,
                message: null,
                error: null
            })
        }else{
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
            error: err
        })

    }

}

exports.put_client = async (req, res) => {
   
    try {
        const data =await Client.findByIdAndUpdate(req.params.clientId,req.body,{new:true,runValidators:true})

            res.status(200).json({
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
            message: "somthing went wrong.",
            error: err
        })

    }

}

exports.delete_client = async (req, res) => {

    try {
        const data =await Client.findByIdAndDelete(req.params.clientId)

            res.status(200).json({
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
            message: "somthing went wrong.",
            error: err
        })

    }


}
