const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookingSchema = Schema({
    _id:Schema.Types.ObjectId,
    booking_id: { type: Number},
    booking_date: { type: Date },
    Drop_date: { type: Date},
    inhand_date: { type: Date},
    handover_date: { type: Date},
    inhand_center: { type: Number},
    handover_center: { type: Number},
    booking_status: { type: String},
    inhand_emp: { type: Number},
    handover_emp: { type: Number},
    vehical_details: { 
       vehical_type: {type: String}, 
       vehical_number: {type: Number}, 
       vehical_lastcervising_date: {type: Date}, 
       vehical_desel_level: {type: Number}, 
    },
    invoice:{
        invoice_number:{type:Number},
        charges:{type:Number},
        pyment_method:{type:String}
    }
})

module.exports = mongoose.model("Booking", bookingSchema);