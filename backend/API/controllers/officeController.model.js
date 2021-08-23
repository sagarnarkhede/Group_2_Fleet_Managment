const mongoose = require('mongoose')
const Office = require('../models/officecustomermodel');

exports.get_office = async (req, res) => {
    try {
        const data = await Office.find()
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
            error: err.message
        })

    }

}

exports.post_office = async (req, res) => {
    try {
        // console.log("hi");
 
        const office = new Office({
            _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,  
            email: req.body.email,
            address:req.body.address,
            city:req.body.city,
            zip:req.body.zip,
            idproof:req.body.idproof,
            centername:req.body.centername,
            username:req.body.username,
            password: req.body.password

           
        })
        console.log(office);
        const data = await office.save()
       
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
            error: err.message
        })

    }

}
exports.get_officeById = async (req, res) => {
 
    try {
        const data =await Office.findById(req.params.officeId)
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

exports.put_office = async (req, res) => {   
    try {
        const office = new Office({
           // _id: mongoose.Types.ObjectId(),
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,  
            email: req.body.email,
            address:req.body.address,
            city:req.body.city,
            zip:req.body.zip,
            idproof:req.body.idproof,
            centername:req.body.centername,
            username:req.body.username,
            password: req.body.password

           
        })
           
       
        
        console.log(office);
        const data =await Office.findByIdAndUpdate(req.params.officeId,office,{new:true,runValidators:true})
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

exports.delete_office = async (req, res) => {

    try {
        const data =await Office.findByIdAndDelete(req.params.officeId)

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
