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
            error: err
        })

    }

}

exports.post_client = async (req, res) => {
    try {
        const address1 = new Address({
            _id: mongoose.Types.ObjectId(),
            add: req.body.add1,
            city: req.body.city1,
            state: req.body.state1,
            zip: req.body.zip1
        })
        const address2 = new Address({
            _id: mongoose.Types.ObjectId(),
            add: req.body.add2,
            city: req.body.city2,
            state: req.body.state2,
            zip: req.body.zip2
        })
        const booking = new Booking({
            _id: mongoose.Types.ObjectId(),
            booking_id: req.body.booking_id,
            booking_date: req.body.booking_date,
            Drop_date: req.body.Drop_date,
            inhand_date: req.body.inhand_date,
            handover_date: req.body.handover_date,
            inhand_center: req.body.inhand_center,
            handover_center: req.body.handover_center,
            booking_status: req.body.booking_status,
            inhand_emp: req.body.inhand_emp,
            handover_emp: req.body.handover_emp,
            vehical_details: {
                vehical_type: req.body.vehical_type,
                vehical_number: req.body.vehical_number,
                vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                vehical_desel_level: req.body.vehical_desel_level
            },
            invoice: {
                invoice_number: req.body.invoice_number,
                charges: req.body.charges,
                pyment_method: req.body.pyment_method
            }
        })
        const client = new Client({
            _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password,
            phone_number: req.body.phone_number,
            mobile_number: req.body.mobile_number,
            driving_lic: req.body.driving_lic,
            issue_date: req.body.issue_date,
            address: [address1, address2],
            credit_card: {
                card_type: req.body.card_type,
                card_number: req.body.card_number,
            },
            bookings: [booking]
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

exports.post_booking = async (req, res) => {
    try {
        const booking = new Booking({
            _id: mongoose.Types.ObjectId(),
            booking_id: req.body.booking_id,
            booking_date: req.body.booking_date,
            Drop_date: req.body.Drop_date,
            inhand_date: req.body.inhand_date,
            handover_date: req.body.handover_date,
            inhand_center: req.body.inhand_center,
            handover_center: req.body.handover_center,
            booking_status: req.body.booking_status,
            inhand_emp: req.body.inhand_emp,
            handover_emp: req.body.handover_emp,
            vehical_details: {
                vehical_type: req.body.vehical_type,
                vehical_number: req.body.vehical_number,
                vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                vehical_desel_level: req.body.vehical_desel_level
            },
            invoice: {
                invoice_number: req.body.invoice_number,
                charges: req.body.charges,
                pyment_method: req.body.pyment_method
            }
        })
        console.log("booking", booking);
        const data = await Client.findById(req.params.clientId)
        data.bookings.push(booking)
        console.log("data", data.bookings);
        const data1 = await Client.findByIdAndUpdate(req.params.clientId, data, { new: true, runValidators: true })

        if (data1) {
            res.status(200).json({
                code: 1,
                data: data1,
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
            error: err
        })

    }

}

exports.get_clientById = async (req, res) => {

    try {
        const data = await Client.findById(req.params.clientId)
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
            error: err
        })

    }

}

exports.put_client = async (req, res) => {
    try {
        const client_bookings = await Client.findById(req.params.clientId)

        const address1 = {
            _id: mongoose.Types.ObjectId(),
            add: req.body.add1,
            city: req.body.city1,
            state: req.body.state1,
            zip: req.body.zip1
        }
        const address2 = {
            _id: mongoose.Types.ObjectId(),
            add: req.body.add2,
            city: req.body.city2,
            state: req.body.state2,
            zip: req.body.zip2
        }
        const client = {
            // _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password,
            phone_number: req.body.phone_number,
            mobile_number: req.body.mobile_number,
            driving_lic: req.body.driving_lic,
            issue_date: req.body.issue_date,
            address: [address1, address2],
            credit_card: {
                card_type: req.body.card_type,
                card_number: req.body.card_number,
            },
            bookings: client_bookings.bookings
        }
        console.log(client);
        const data = await Client.findByIdAndUpdate(req.params.clientId, client, { new: true, runValidators: true })
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

exports.put_booking = async (req, res) => {
    try {
        const client_bookings = await Client.findById(req.params.clientId)

        booking_arr = client_bookings.bookings
        for (var x = 0; x < booking_arr.length; x++) {
            if (booking_arr[x]._id == req.params.bookingId) {
                const booking = {
                    _id: booking_arr[x]._id,
                    booking_id: req.body.booking_id,
                    booking_date: req.body.booking_date,
                    Drop_date: req.body.Drop_date,
                    inhand_date: req.body.inhand_date,
                    handover_date: req.body.handover_date,
                    inhand_center: req.body.inhand_center,
                    handover_center: req.body.handover_center,
                    booking_status: req.body.booking_status,
                    inhand_emp: req.body.inhand_emp,
                    handover_emp: req.body.handover_emp,
                    vehical_details: {
                        vehical_type: req.body.vehical_type,
                        vehical_number: req.body.vehical_number,
                        vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                        vehical_desel_level: req.body.vehical_desel_level
                    },
                    invoice: {
                        invoice_number: req.body.invoice_number,
                        charges: req.body.charges,
                        pyment_method: req.body.pyment_method
                    }
                }
                booking_arr[x] = booking;
                break;
            }
        }
        if(x == booking_arr.length)
        {
            throw new Error("invalid Booking Id");
        }
        

        const data =await Client.findByIdAndUpdate(req.params.clientId,client_bookings,{new:true,runValidators:true})
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
            error: err.message
        })

    }

}

exports.delete_client = async (req, res) => {

    try {
        const data = await Client.findByIdAndDelete(req.params.clientId)

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
