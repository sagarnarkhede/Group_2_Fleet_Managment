const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const officeSchema = Schema({
    _id:Schema.Types.ObjectId,
    fname: { type: String, default:null },
    mname: { type: String ,default:null},
    lname: { type: String ,default:null },
    email: { type: String ,default:null},
    address: {type:String ,default:null },
    city:{type:String ,default:null},
    zip: { type: Number ,default:0},
    idproof:{type:String,default:null},
    centername:{type:String,default:null} ,
    username:{type:String,default:null},

    password: {type: String,default:null},
  
  
})

module.exports = mongoose.model("office", officeSchema);