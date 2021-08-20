const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookingSchema = Schema({
    _id:Schema.Types.ObjectId,
    booking_id: { type: Number, default:null},
    booking_date: { type: Date, default:null },
    Drop_date: { type: Date, default:null },
    inhand_date: { type: Date, default:null },
    handover_date: { type: Date, default:null },
    inhand_center: { type: Number, default:null },
    handover_center: { type: Number, default:null },
    booking_status: { type: String, default:null },
    inhand_emp: { type: Number, default:null },
    handover_emp: { type: Number, default:null },
    vehical_details: { 
       vehical_type: {type: String, default:null}, 
       vehical_number: {type: Number, default:null}, 
       vehical_lastcervising_date: {type: Date, default:null}, 
       vehical_desel_level: {type: Number, default:null}, 
    },
    invoice:{
        invoice_number:{type:Number},
        charges:{type:Number},
        pyment_method:{type:String}
    }
   

    
})

module.exports = mongoose.model("Booking", bookingSchema);