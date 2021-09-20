const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookingSchema = Schema({
    _id:Schema.Types.ObjectId,
    booking_id: { type: Number,default:0},
    pickupDate: { type: String,default:null }, // *
    pickupTime: { type: String,default:null},
    dropDate: {type: String,default:null},
    dropTime: { type: String,default:null},
    inhand_center: { type: String,default:null},  // *
    handover_center: { type: String,default:null},  // *
    booking_status: { type: String,default:null},   // *
    inhand_emp: { type: Number,default:null},  
    handover_emp: { type: Number,default:0},
    vehical_details: { 
       cartype: {type: String,default:null}, 
       fuelStatus: {type: String,default:null}, 
       carStatus: {type: String,default:null}, 
       carno: {type: Number,default:0}, 
       vehical_lastcervising_date: {type: String,default:null}, 
       carname: {type: String,default:null}, 
    },
    invoice:{
        invoice_number:{type:Number,default:0},
        amount:{type:Number,default:0},   // *
        pyment_method:{type:String,default:null}
    },
    addon:{
        nav:{type: String,default:null},
       camp:{type: String,default:null},
       chSeats:{type: String,default:null},
       quant:{type: Number,default:0}
    }
})

module.exports = mongoose.model("Booking", bookingSchema);