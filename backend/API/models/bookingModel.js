const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookingSchema = Schema({
    _id:Schema.Types.ObjectId,
    booking_id: { type: Number},
    pickupDate: { type: String }, // *
    pickupTime: { type: String},
    dropDate: {type: String},
    dropTime: { type: String},
    inhand_center: { type: String},  // *
    handover_center: { type: String},  // *
    booking_status: { type: String},   // *
    inhand_emp: { type: Number},  
    handover_emp: { type: Number},
    vehical_details: { 
       cartype: {type: String}, 
       fuelStatus: {type: String}, 
       carStatus: {type: String}, 
       carno: {type: Number}, 
       vehical_lastcervising_date: {type: Date}, 
       carname: {type: String}, 
    },
    invoice:{
        invoice_number:{type:Number},
        amount:{type:Number},   // *
        pyment_method:{type:String}
    },
    addon:{
        nav:{type: String},
       camp:{type: String},
       chSeats:{type: String},
       quant:{type: Number}
    }
})

module.exports = mongoose.model("Booking", bookingSchema);