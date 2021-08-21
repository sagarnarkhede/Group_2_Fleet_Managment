const express = require('express')
const clientRouter = require('./API/routes/clients')
const contact_usRouter = require('./API/routes/contact_us')

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://"+process.env.MPNGOUSER+":"+process.env.MPNGOPASS+"@cluster0.hguiz.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
// mongodb+srv://fleet_managment:fleet_managment@cluster0.hguiz.mongodb.net/test

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/clients",clientRouter);
app.use("/contact_us", contact_usRouter)



app.use(express.static('public'));

//cros error {cross origine resourse sharing}
app.use((req,res,next)=>{
res.header("Access-Control-Allow-Orine","*");
res.header("Access-Control-Allow-Header",'Origine','X-Requested-width');
if(req.method === "OPTION"){
    res.header("Access-Control-Allow-Methode","PUT,PATCH,OUST,DELETE,GET")
    return res.status(200).json();
}
next();
})

app.use((req,res,next)=>{
const error = new Error("not found");
error.status = 404;
next(error);
});

 
module.exports=app;
