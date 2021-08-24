const mongoose = require('mongoose')
const Airport = require('../models/airportModel');


exports.get_airport = async (req, res) => {
    try {
        const data = await Airport.find()
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

exports.post_airport = async (req, res) => {
    try {
       
        const airport = new Airport({
            _id: mongoose.Types.ObjectId(),
            airportname: req.body.airportname,
            airportno: req.body.airportno,
            nearestcenter: []
            
        })
        console.log(airport);
        const data = await airport.save()

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

exports.post_center = async (req, res) => {
    try {
    
        const data = await Airport.findById(req.params.airportId)
        data.nearestcenter.push(req.body.centerId)
        console.log("data", data.nearestcenter);
        const data1 = await Airport.findByIdAndUpdate(req.params.airportId, data, { new: true, runValidators: true })

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
            error: err.message
        })

    }

}

exports.get_airportById = async (req, res) => {

    try {
        const data = await Airport.findById(req.params.airportId)
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

exports.put_airport = async (req, res) => {
    try {
        const airport_centers = await Airport.findById(req.params.airportId)
        const airport = {
            airportname: req.body.airportname,
            airportno: req.body.airportno,
            nearestcenter: airport_centers.nearestcenter
            
        }
       
        console.log(airport);
        const data = await Airport.findByIdAndUpdate(req.params.airportId, airport, { new: true, runValidators: true })
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

exports.delete_airport = async (req, res) => {

    try {
        const data = await Airport.findByIdAndDelete(req.params.airportId)

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
