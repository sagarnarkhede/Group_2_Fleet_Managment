const mongoose = require('mongoose');
const Centers = require('../models/centerModel');
const Cars = require('../models/carsModel');

exports.get_center = async (req, res) => {
    try {
        const data = await Centers.find(); //advanced method.
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
                data: data,
                message: "no data found!",
                error: null
            })
        }


    } catch (err) {
        res.status(500).json({
            code: 0,
            data: data,
            message: "something wents wrong!",
            error: err
        })
    }
}

exports.post_center = async (req, res, next) => {
    try {
        const cars = new Cars({
            _id: mongoose.Types.ObjectId(),
            carname: req.body.carname,
            carno: req.body.carno,
            cartype: req.body.cartype,
            seat_capacity: req.body.seat_capacity,
            fuelStatus: req.body.fuelStatus,
            carStatus: req.body.carStatus,
            rateperday: req.body.rateperday,
            rateperweek: req.body.rateperweek,
            ratepermonth: req.body.ratepermonth,
            last_servicedate: req.body.last_servicedate
        })

        const center = new Centers({
            _id: mongoose.Types.ObjectId(),
            centerid: req.body.centerid,
            centername: req.body.centername,
            state: req.body.state,
            city: req.body.city,
            zip: req.body.zip,
            address: req.body.address,
            telphone: req.body.telphone,
            officetime: req.body.officetime,
            weeklyoff: req.body.weeklyoff,
            cars: [cars]
        })
        const data = await center.save() //save method will save data in database.

        res.status(200).json({
            code: 1,
            data: data,
            message: null,
            error: null
        })
    } catch (err) {
        res.status(500).json({
            code: 0,
            //   data: data,
            message: "something wents wrong!",
            error: err.message
        })
    }
}

exports.post_car = async (req, res) => {
    try {
        const car = new Cars({
            _id: mongoose.Types.ObjectId(),
            carname: req.body.carname,
            carno: req.body.carno,
            cartype: req.body.cartype,
            seat_capacity: req.body.seat_capacity,
            fuelStatus: req.body.fuelStatus,
            carStatus: req.body.carStatus,
            rateperday: req.body.rateperday,
            rateperweek: req.body.rateperweek,
            ratepermonth: req.body.ratepermonth,
            last_servicedate: req.body.last_servicedate
        })
        console.log("car", car);
        const data = await Centers.findById(req.params.centerId)
        data.cars.push(car)
        console.log("data", data.cars);
        const data1 = await Centers.findByIdAndUpdate(req.params.centerId, data, { new: true, runValidators: true })

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

exports.get_centerById = async (req, res) => {

    try {
        const data = await Centers.findById(req.params.centerId)
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

exports.put_center = async (req, res) => {
    try {
        const center_cars = await Centers.findById(req.params.centerId)
        const cars = new Cars({
            _id: mongoose.Types.ObjectId(),
            carname: req.body.carname,
            carno: req.body.carno,
            cartype: req.body.cartype,
            seat_capacity: req.body.seat_capacity,
            fuelStatus: req.body.fuelStatus,
            carStatus: req.body.carStatus,
            rateperday: req.body.rateperday,
            rateperweek: req.body.rateperweek,
            ratepermonth: req.body.ratepermonth,
            last_servicedate: req.body.last_servicedate
        })

        const center = new Centers({
            //_id: mongoose.Types.ObjectId(),
            centerid: req.body.centerid,
            centername: req.body.centername,
            state: req.body.state,
            city: req.body.city,
            zip: req.body.zip,
            address: req.body.address,
            telphone: req.body.telphone,
            officetime: req.body.officetime,
            weeklyoff: req.body.weeklyoff,
            cars: [cars]
        })

        console.log(center);
        const data = await Centers.findByIdAndUpdate(req.params.centerId, center, { new: true, runValidators: true })
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

exports.put_car = async (req, res) => {
    try {
        const center_cars = await Centers.findById(req.params.centerId)

        car_arr = center_cars.cars
        for (var x = 0; x < car_arr.length; x++) {
            if (car_arr[x]._id == req.params.carId) {
                const car = {
                    _id: car_arr[x]._id,
                    carname: req.body.carname,
                    carno: req.body.carno,
                    cartype: req.body.cartype,
                    seat_capacity: req.body.seat_capacity,
                    fuelStatus: req.body.fuelStatus,
                    carStatus: req.body.carStatus,
                    rateperday: req.body.rateperday,
                    rateperweek: req.body.rateperweek,
                    ratepermonth: req.body.ratepermonth,
                    last_servicedate: req.body.last_servicedate
                }
                car_arr[x] = car;
                break;
            }
        }
        if (x == car_arr.length) {
            throw new Error("invalid Car Id");
        }


        const data = await Centers.findByIdAndUpdate(req.params.centerId, center_cars, { new: true, runValidators: true })
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

exports.delete_center = async (req, res) => {

    try {
        const data = await Centers.findByIdAndDelete(req.params.centerId)

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