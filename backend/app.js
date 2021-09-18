const express = require('express')
const clientRouter = require('./API/routes/clients')
const contact_usRouter = require('./API/routes/contact_us')
const centerRouter = require('./API/routes/centers')
const officeRouter = require('./API/routes/office')
const airportRoutes = require('./API/routes/airports')

const app = express();
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, POST, DELETE"
}
app.use(cors(corsOptions))

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

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header",'Origine','X-Requested-width');
    if(req.method === "OPTION"){
        res.header("Access-Control-Allow-Method","PUT,PATCH,POST,DELETE,GET")
        return res.status(200).json();
    }
    next();
    })
    
//app.use(express.static('public'));
app.use("/clients",clientRouter);
app.use("/contact_us", contact_usRouter);
app.use("/centers", centerRouter);
app.use("/office",officeRouter);
app.use("/airport",airportRoutes);  


 
module.exports=app;
