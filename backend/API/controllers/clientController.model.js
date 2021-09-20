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
        const booking = new Booking({
            _id: mongoose.Types.ObjectId(),
            booking_id: req.body.booking_id,
            pickupDate: req.body.pickupDate,
            pickupTime: req.body.pickupTime,
            dropDate: req.body.dropDate,
            dropTime: req.body.dropTime,
            inhand_center: req.body.inhand_center,
            handover_center: req.body.handover_center,
            booking_status: req.body.booking_status,
            inhand_emp: req.body.inhand_emp,
            handover_emp: req.body.handover_emp,
            vehical_details: {
                cartype: req.body.cartype,
                carno: req.body.carno,
                fuelStatus: req.body.fuelStatus,
                carStatus: req.body.carStatus,
                vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                carname: req.body.carname
            },
            invoice: {
                invoice_number: req.body.invoice_number,
                amount: req.body.amount,
                pyment_method: req.body.card_type
            },
            addon: {
                nav: req.body.nav,
                camp: req.body.camp,
                chSeats: req.body.chSeats,
                quant: req.body.quant
            }
        })
        const client = new Client({
            _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            password: req.body.password,
            phone_number: req.body.phone_number,
            mobile_number: req.body.mobile_number,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            card_type: req.body.card_type,
            card_number: req.body.card_number,
            driving_lic: req.body.driving_lic,
            IDP: req.body.IDP,
            driving_issued_by: req.body.driving_issued_by,
            driving_valid: req.body.driving_valid,
            passport_number: req.body.passport_number,
            passport_valid: req.body.passport_valid,
            passport_issued_by: req.body.passport_issued_by,
            passport_date: req.body.passport_date,
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
        
        // // Send Mail code
        const nodemailer = require('nodemailer');
        var user= process.env.AUTHSENDERMAIL;
        var pass= process.env.AUTHSENDERPASS
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        var mailOptions = {
            from: user,
            to: data.email,
            subject: 'Booking Confirm',
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body>
            <h1>Welcome To Rapid Rental!!</h1>
            <div class="container">
              <p>Hello,</p>
              <p>
               mr. ${data.fname} ${data.lname},
              </p> 
              </br>
              <p>your Booking Number is: ${data.bookings[0]._id}</ p>           
              <table class="table">
                <thead>
                  <tr>
                    <th>Your Booking Detail are : </th>
                  </tr>
                </thead>
                </br>
                <tbody>
                  <tr>
                    <td>Pick up Date :</td>
                    <td>${data.bookings[0].pickupDate}</td>
                  </tr>
                 
                  <tr>
                    <td>Pick up Time : </td>
                    <td>${data.bookings[0].pickupTime}</td>
                  </tr>
                  <tr>
                    <td>Drop Date :</td>
                    <td>${data.bookings[0].dropDate}</td>
                  </tr>
                  <tr>
                    <td>Pick up Time : </td>
                    <td>${data.bookings[0].dropTime}</td>
                  </tr>
                   <tr>
                    <td>Center no : </td>
                    <td>${data.bookings[0].inhand_center}</td>
                  </tr> <tr>
                    <td>Booking Status : </td>
                    <td>${data.bookings[0].booking_status}</td>
                  </tr>
                   <tr>
                    <td>Total Amount :  </td>
                    <td>${data.bookings[0].invoice.amount}</td>
                  </tr>
                </tbody>
              </table>
              <p>Happy jouney !!</pr>
              <h4>Custmer Contact:-  </h4>
              <p>
              phone:- +919834302938</p>
              <p>
              email id:- rapidrental@gmail.com
              </p>
            </div>
            </body>
            </html>
            `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent sucessfully: ' + info.response);
            }
        });

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
            pickupDate: req.body.pickupDate,
            pickupTime: req.body.pickupTime,
            dropDate: req.body.dropDate,
            dropTime: req.body.dropTime,
            inhand_center: req.body.inhand_center,
            handover_center: req.body.handover_center,
            booking_status: req.body.booking_status,
            inhand_emp: req.body.inhand_emp,
            handover_emp: req.body.handover_emp,
            vehical_details: {
                cartype: req.body.cartype,
                carno: req.body.carno,
                fuelStatus: req.body.fuelStatus,
                carStatus: req.body.carStatus,
                vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                carname: req.body.carname
            },
            invoice: {
                invoice_number: req.body.invoice_number,
                amount: req.body.amount,
                pyment_method: req.body.card_type
            },
            addon: {
                nav: req.body.nav,
                camp: req.body.camp,
                chSeats: req.body.chSeats,
                quant: req.body.quant
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
            var user= process.env.AUTHSENDERMAIL;
            var pass= process.env.AUTHSENDERPASS
           // Send Mail code
            const nodemailer = require('nodemailer');
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: user,
                    pass: pass
                }
            });

            var mailOptions = {
                from: user,
                to: data.email,
                subject: 'Booking Confirm',
                html: `
            <!DOCTYPE html>
            <html lang="en">
            <body>
            <h1>Welcome To Rapid Rental!!</h1>
            <div class="container">
              <p>Hello,</p>
              <p>
               mr. ${data.fname} ${data.lname},
              </p> 
              </br>
              <p>your Booking Number is: ${booking._id}</ p>           
              <table class="table">
                <thead>
                  <tr>
                    <th>Your Booking Detail are : </th>
                  </tr>
                </thead>
                </br>
                <tbody>
                  <tr>
                    <td>Pick up Date :</td>
                    <td>${booking.pickupDate}</td>
                  </tr>
                 
                  <tr>
                    <td>Pick up Time : </td>
                    <td>${booking.pickupTime}</td>
                  </tr>
                  <tr>
                    <td>Drop Date :</td>
                    <td>${booking.dropDate}</td>
                  </tr>
                  <tr>
                    <td>Pick up Time : </td>
                    <td>${booking.dropTime}</td>
                  </tr>
                   <tr>
                    <td>Center no : </td>
                    <td>${booking.inhand_center}</td>
                  </tr> <tr>
                    <td>Booking Status : </td>
                    <td>${booking.booking_status}</td>
                  </tr>
                   <tr>
                    <td>Total Amount :  </td>
                    <td>${booking.invoice.amount}</td>
                  </tr>
                </tbody>
              </table>
              <p>Happy jouney !!</pr>
              <h4>Custmer Contact:-  </h4>
              <p>
              phone:- +919834302938</p>
              <p>
              email id:- rapidrental@gmail.com
              </p>
            </div>
            </body>
            </html>
            `
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent sucessfully: ' + info.response);
                }
            });
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
       
        const booking = new Booking({
           _id: mongoose.Types.ObjectId(req.body.bookingid),
            booking_id: req.body.booking_id,
            pickupDate: req.body.pickupDate,
            pickupTime: req.body.pickupTime,
            dropDate: req.body.dropDate,
            dropTime: req.body.dropTime,
            inhand_center: req.body.inhand_center,
            handover_center: req.body.handover_center,
            booking_status: req.body.booking_status,
            inhand_emp: req.body.inhand_emp,
            handover_emp: req.body.handover_emp,
            vehical_details: {
                cartype: req.body.cartype,
                carno: req.body.carno,
                fuelStatus: req.body.fuelStatus,
                carStatus: req.body.carStatus,
                vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                carname: req.body.carname
            },
            invoice: {
                invoice_number: req.body.invoice_number,
                amount: req.body.amount,
                pyment_method: req.body.card_type
            },
            addon: {
                nav: req.body.nav,
                camp: req.body.camp,
                chSeats: req.body.chSeats,
                quant: req.body.quant
            }
        })
        var index = -1;
        client_bookings.bookings.map((ele,i)=>{
            if(ele._id == req.body.bookingid)
            {
                index = i;
            }
        })
        client_bookings.bookings[index] = booking
        const client = new Client({
           // _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            password: req.body.password,
            phone_number: req.body.phone_number,
            mobile_number: req.body.mobile_number,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            card_type: req.body.card_type,
            card_number: req.body.card_number,
            driving_lic: req.body.driving_lic,
            IDP: req.body.IDP,
            driving_issued_by: req.body.driving_issued_by,
            driving_valid: req.body.driving_valid,
            passport_number: req.body.passport_number,
            passport_valid: req.body.passport_valid,
            passport_issued_by: req.body.passport_issued_by,
            passport_date: req.body.passport_date,
            bookings: client_bookings.bookings
        })
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
                    pickupDate: req.body.pickupDate,
                    pickupTime: req.body.pickupTime,
                    dropDate: req.body.dropDate,
                    dropTime: req.body.dropTime,
                    inhand_center: req.body.inhand_center,
                    handover_center: req.body.handover_center,
                    booking_status: req.body.booking_status,
                    inhand_emp: req.body.inhand_emp,
                    handover_emp: req.body.handover_emp,
                    vehical_details: {
                        cartype: req.body.cartype,
                        carno: req.body.carno,
                        fuelStatus: req.body.fuelStatus,
                        carStatus: req.body.carStatus,
                        vehical_lastcervising_date: req.body.vehical_lastcervising_date,
                        carname: req.body.carname
                    },
                    invoice: {
                        invoice_number: req.body.invoice_number,
                        amount: req.body.amount,
                        pyment_method: req.body.card_type
                    },
                    addon: {
                        nav: req.body.nav,
                        camp: req.body.camp,
                        chSeats: req.body.chSeats,
                        quant: req.body.quant
                    }
                }
                booking_arr[x] = booking;
                break;
            }
        }
        if (x == booking_arr.length) {
            throw new Error("invalid Booking Id");
        }
console.log("client put ",req.body.carno);

        const data = await Client.findByIdAndUpdate(req.params.clientId, client_bookings, { new: true, runValidators: true })
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
