import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';
class CustomerInfoPage extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this)
        console.log("customer info ", this.props);
        this.state = {
            _id: '',
            fname: '',
            lname: '',
            email: '',
            date_of_birth: '',
            password: '',
            phone_number: '',
            mobile_number: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            card_type: '',
            card_number: '',
            driving_lic: '',
            IDP: '',
            driving_issued_by: '',
            driving_valid: '',
            passport_number: '',
            passport_valid: '',
            passport_issued_by: '',
            passport_date: '',
            membershipno: '',
            loginpassword: '',
            booking_status: 'booked',
            amount: '',
            invoice_number:'',
            fullData:this.props.location.state
        }
    }

    handleBack() {
        this.props.history.goBack()
    }
    getAmount()
    {
        var data = this.props.location.state;
        try{
            var carType = data?.cardetailsState.cartype
            console.log("Car Type", carType);
            var carArr = data.cardetailsState.locationState.selectaddress.cars
                // Total no of days Calculation.
                const date1 = new Date(data.cardetailsState.locationState.bookingState.pickupDate)
                const date2 = new Date(data.cardetailsState.locationState.bookingState.dropDate)
                const oneDay = 1000 * 60 * 60 * 24;  //milliseconnd in on day.
                // Calculating the time difference between two dates
                const diffInTime = date2.getTime() - date1.getTime();
                // Calculating the no. of days between two dates
                const Days = Math.round(diffInTime /oneDay);
    
                // Calcutions of Addon Amount
                    var qty = data.quant;
                    if(data.nav != null && data.camp != null && data.chSeats){
                        var addonAMT =  ((10*Days) + (30*Days) + (qty*15*Days));
                        console.log("Addon Amount: "+addonAMT)
                    }else if( data.nav != null && data.camp != null){
                        var addonAMT =  ((10*Days) + (30*Days));
                        console.log("Addon Amount: "+addonAMT)
                    }else if (data.nav != null ){
                        var addonAMT =  (10*Days);
                        console.log("Addon Amount: "+addonAMT)
                    }
    
            for (var i = 0; i < carArr?.length; i++) {
                
                console.log("Pickupdate" + date1, "Dropdate" + date2, "Journey Total days" + Days);
    
                if (carArr[i].cartype == "small car" && carType == "small car") {
                   //Logic For Total Invoice Amount.
                    if(Days >= 1 || Days < 7 ){
                        var rateperDay = carArr[i].rateperday;
                        var Amount = ((rateperDay*Days) + addonAMT);
                        console.log("Total Amount: "+Amount);
                    }else if(Days == 7 || Days < 31 ){
                        var rateperWeek = carArr[i].rateperweek;
                        const W = Math.round(Days/7);
                        var Amount = ((rateperWeek*W) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }else if(Days == 31 || Days > 31){
                        var rateperMonth = carArr[i].ratepermonth;
                        const M = Math.round(Days/31); 
                        var Amount = ((rateperMonth*M) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }
                }
                else if (carArr[i].cartype == "compact car" && carType == "compact car") {
                   //Logic For Total Invoice Amount.
                   if(Days >= 1 || Days < 7 ){
                    var rateperDay = carArr[i].rateperday;
                    var Amount = ((rateperDay*Days) + addonAMT);
                    console.log("Total Amount: "+Amount);
                }else if(Days == 7 || Days < 31 ){
                    var rateperWeek = carArr[i].rateperweek;
                    const W = Math.round(Days/7);
                    var Amount = ((rateperWeek*W) + addonAMT);
                    console.log("Total Amount: "+Amount); 
                }else if(Days == 31 || Days > 31){
                    var rateperMonth = carArr[i].ratepermonth;
                    const M = Math.round(Days/31); 
                    var Amount = ((rateperMonth*M) + addonAMT);
                    console.log("Total Amount: "+Amount); 
                }
                }
                else if (carArr[i].cartype == "Intermediate car" && carType == "Intermediate car") {
                    //Logic For Total Invoice Amount.
                    if(Days >= 1 || Days < 7 ){
                        var rateperDay = carArr[i].rateperday;
                        var Amount = ((rateperDay*Days) + addonAMT);
                        console.log("Total Amount: "+Amount);
                    }else if(Days == 7 || Days < 31 ){
                        var rateperWeek = carArr[i].rateperweek;
                        const W = Math.round(Days/7);
                        var Amount = ((rateperWeek*W) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }else if(Days == 31 || Days > 31){
                        var rateperMonth = carArr[i].ratepermonth;
                        const M = Math.round(Days/31); 
                        var Amount = ((rateperMonth*M) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }
                }
                else if (carArr[i].cartype == "sedan" && carType == "sedan") {
                    //Logic For Total Invoice Amount.
                    if(Days >= 1 || Days < 7 ){
                        var rateperDay = carArr[i].rateperday;
                        var Amount = ((rateperDay*Days) + addonAMT);
                        console.log("Total Amount: "+Amount);
                    }else if(Days == 7 || Days < 31 ){
                        var rateperWeek = carArr[i].rateperweek;
                        const W = Math.round(Days/7);
                        var Amount = ((rateperWeek*W) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }else if(Days == 31 || Days > 31){
                        var rateperMonth = carArr[i].ratepermonth;
                        const M = Math.round(Days/31); 
                       var Amount = ((rateperMonth*M) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }
                }
                else if (carArr[i].cartype == "SUV" && carType == "SUV") {
                    //Logic For Total Invoice Amount.
                    if(Days >= 1 || Days < 7 ){
                        var rateperDay = carArr[i].rateperday;
                        var Amount = ((rateperDay*Days) + addonAMT);
                        console.log("Total Amount: "+Amount);
                    }else if(Days == 7 || Days < 31 ){
                        var rateperWeek = carArr[i].rateperweek;
                        const W = Math.round(Days/7);
                        var Amount = ((rateperWeek*W) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    }else if(Days == 31 || Days > 31){
                        var rateperMonth = carArr[i].ratepermonth;
                        const M = Math.round(Days/31); 
                        var Amount = ((rateperMonth*M) + addonAMT);
                        console.log("Total Amount: "+Amount); 
                    } 
                }
                //Invoice Number Generation.
                var min = 1000000000;
                var max = 9999999999;
                var num = Math.floor(Math.random() * (max - min + 1)) + min;
                
                this.setState({
                    amount: Amount,
                    invoice_number: num
                })
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }

    componentDidMount() {
        var data = this.props.location.state;
        console.log("Customer Info", data)
        this.getAmount()

        if(data.url == "confirmbooking")
            {
                try {
                    for (let x in this.state) {
                        for (let y in data.data) {
                            if (x == y) {
                                this.setState({
                                    [x]: data.data[y]
                                })
                            }
                        }
                    }
                    sessionStorage.setItem("userdata",JSON.stringify(data.data))
                    this.setState({
                        pickupDate: data.data.fullData.cardetailsState.locationState.bookingState.pickupDate,
                        dropDate: data.data.fullData.cardetailsState.locationState.bookingState.dropDate,
                        pickupTime: data.data.fullData.cardetailsState.locationState.bookingState.pickupTime,
                        dropTime: data.data.fullData.cardetailsState.locationState.bookingState.dropTime,
                        handover_center: data.data.fullData.cardetailsState.locationState.selectaddress.centername,
                        inhand_center: data.data.fullData.cardetailsState.locationState.selectaddress.centername,
                        selectaddress: data.data.fullData.cardetailsState.locationState.selectaddress.address,
                        cartype: data.data.fullData.cardetailsState.cartype,
                        nav: data.data.fullData.nav,
                        camp: data.data.fullData.camp,
                        chSeats: data.data.fullData.chSeats,
                        quant: data.data.fullData.quant
                    })
                }
                catch (e) {
                    console.log(e);
                }

            }
        else{
        try {
            this.setState({
                pickupDate: data.cardetailsState.locationState.bookingState.pickupDate,
                dropDate: data.cardetailsState.locationState.bookingState.dropDate,
                pickupTime: data.cardetailsState.locationState.bookingState.pickupTime,
                dropTime: data.cardetailsState.locationState.bookingState.dropTime,
                handover_center: data.cardetailsState.locationState.selectaddress.centername,
                inhand_center: data.cardetailsState.locationState.selectaddress.centername,
                selectaddress: data.cardetailsState.locationState.selectaddress.address,
                cartype: data.cardetailsState.cartype,
                nav: data.nav,
                camp: data.camp,
                chSeats: data.chSeats,
                quant: data.quant
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    if(sessionStorage.getItem("userdata"))
    {
        var sessiondata =JSON.parse(sessionStorage.getItem("userdata"))
        console.log(sessiondata);
        for (let x in this.state) {
            for (let y in sessiondata) {
                if (x == y) {
                    this.setState({
                        [x]: sessiondata[y]
                    })
                }
            }
        }
        
    }
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    myLoginHandler = async (event) => {
        event.preventDefault();
        axios.get('http://localhost:5555/clients/' + this.state.membershipno)
            .then((res) => {
                let ele = res.data.data
                if (ele._id == this.state.membershipno && ele.password == this.state.loginpassword) {
                    this.setState({ _id: ele._id });
                    for (let x in this.state) {
                        for (let y in ele) {
                            if (x == y) {
                                this.setState({
                                    [x]: ele[y]
                                })
                            }
                        }
                    }
                }
                else {
                    alert("invalid Id pass")
                }
            }).catch((e) => {
                alert("invalid Id pass")
                console.log("e", e.message);
            })
    }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    getLogin() {
        return (
            <React.Fragment>
                <form className="form-group" onSubmit={this.myLoginHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                    <label >Membership No : </label>
                    <input type="text" className="form-control" name="membershipno" onChange={this.myChangeHandler}></input>
                    <label>password : </label>
                    <input type="text" className="form-control" name="loginpassword" onChange={this.myChangeHandler} ></input>
                    <br />
                    {/* <p>Forget Password</p>
                    <br /> */}

                    <button className="btn btn-primary" style={{ textAlign: "center" }}>Log In</button>
                    {/* <button className="btn btn-primary" style={{ textAlign: "center", float:"right" }}>Sign Up</button> */}
                </form>
                <br />
                {/* <br/> */}
            </React.Fragment>

        )
    }
    getBookingDetails() {
        var data = this.props.location.state;
        if(data.url == "confirmbooking")
        {
            console.log("data:data.fullData",data.fullData);
        return (
            <div style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                <label>Your Booking : </label>
                <br />
                <br />
                <strong>Pick-up: </strong><Link to={{ pathname: "/bookcar", state: {data:data.data.fullData,url:"custemerinfo"} }} >Modify</Link>
                <p>{this.state.pickupDate} {this.state.pickupTime}</p>
                <strong>Pick-up at: </strong><Link to={{ pathname: "/location", state: {data:data.data.fullData,url:"custemerinfo"} }} >Modify</Link>
                <p>{this.state.inhand_center}</p>
                <strong>Return: </strong><Link to={{ pathname: "/bookcar", state: {data:data.data.fullData,url:"custemerinfo"} }} >Modify</Link>
                <p>{this.state.dropDate} {this.state.dropTime}</p>
                <strong>Return at: </strong><Link to={{ pathname: "/location", state: {data:data.data.fullData,url:"custemerinfo"} }} >Modify</Link>
                <p>{this.state.handover_center}</p>
                <strong>Vehicle Selection: </strong><Link to={{ pathname: "/cardetail", state: {data:data.data.fullData,url:"custemerinfo"} }} >Modify</Link>
                <p>{this.state.cartype} </p>
                <strong>Rental Ad-Ons: </strong><Link to={{ pathname: "/addon", state: {data:data.data.fullData,url:"custemerinfo"} }} >Modify</Link>
                <p>{this.state.nav},{this.state.camp},{this.state.chSeats},{this.state.quant}</p>

            </div>
        )
        }
        else{
            return (
                <div style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                    <label>Your Booking : </label>
                    <br />
                    <br />
                    <strong>Pick-up: </strong><Link to={{ pathname: "/bookcar", state: {data:this.props.location.state,url:"custemerinfo"} }} >Modify</Link>
                    <p>{this.state.pickupDate} {this.state.pickupTime}</p>
                    <strong>Pick-up at: </strong><Link to={{ pathname: "/location", state: {data:this.props.location.state,url:"custemerinfo"} }} >Modify</Link>
                    <p>{this.state.inhand_center}</p>
                    <strong>Return: </strong><Link to={{ pathname: "/bookcar", state: {data:this.props.location.state,url:"custemerinfo"} }} >Modify</Link>
                    <p>{this.state.dropDate} {this.state.dropTime}</p>
                    <strong>Return at: </strong><Link to={{ pathname: "/location", state: {data:this.props.location.state,url:"custemerinfo"} }} >Modify</Link>
                    <p>{this.state.handover_center}</p>
                    <strong>Vehicle Selection: </strong><Link to={{ pathname: "/cardetail", state: {data:this.props.location.state,url:"custemerinfo"} }} >Modify</Link>
                    <p>{this.state.cartype} </p>
                    <strong>Rental Ad-Ons: </strong><Link to={{ pathname: "/addon", state: {data:this.props.location.state,url:"custemerinfo"} }} >Modify</Link>
                    <p>{this.state.nav},{this.state.camp},{this.state.chSeats},{this.state.quant}</p>
    
                </div>
            )
        }
    }
    getForm() {
        return (
            <React.Fragment>
                <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                    <div className="row">
                        <div className="col-6">
                            <label >First Name : </label>
                            <input type="text" className="form-control" name="fname" defaultValue={this.state.fname} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Last Name : </label>
                            <input type="text" className="form-control" name="lname" defaultValue={this.state.lname} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />
                    <label>Address 1 : </label>
                    <input type="text" className="form-control" name="address1" defaultValue={this.state.address1} onChange={this.myChangeHandler} ></input>
                    <br />
                    <label>Address 2: </label>
                    <input type="text" className="form-control" name="address2" defaultValue={this.state.address2} onChange={this.myChangeHandler} ></input>
                    <br />

                    <div className="row">
                        <div className="col-6">
                            <label >Email : </label>
                            <input type="text" className="form-control" name="email" defaultValue={this.state.email} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>password : </label>
                            <input type="text" className="form-control" name="password" defaultValue={this.state.password} onChange={this.myChangeHandler} ></input>
                        </div>

                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Phone Number : </label>
                            <input type="text" className="form-control" name="phone_number" defaultValue={this.state.phone_number} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Cell : </label>
                            <input type="text" className="form-control" name="mobile_number" defaultValue={this.state.mobile_number} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label>Date of Birth : </label>
                            <input type="date" className="form-control" name="date_of_birth" defaultValue={this.state.date_of_birth} onChange={this.myChangeHandler} ></input>
                        </div>
                        <div className="col-6">
                            <label>Zip Code : </label>
                            <input type="number" className="form-control" name="zip" defaultValue={this.state.zip} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >City : </label>
                            <input type="text" className="form-control" name="city" defaultValue={this.state.city} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>State : </label>
                            <input type="text" className="form-control" name="state" defaultValue={this.state.state} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Card Type : </label>
                            <input type="text" className="form-control" name="card_type" defaultValue={this.state.card_type} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Card Number : </label>
                            <input type="text" className="form-control" name="card_number" defaultValue={this.state.card_number} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Local Driving Lic : </label>
                            <input type="text" className="form-control" name="driving_lic" defaultValue={this.state.driving_lic} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>IDP# : </label>
                            <input type="text" className="form-control" name="IDP" defaultValue={this.state.IDP} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Issuer By : </label>
                            <input type="text" className="form-control" name="driving_issued_by" defaultValue={this.state.driving_issued_by} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Valid Upto : </label>
                            <input type="date" className="form-control" name="driving_valid" defaultValue={this.state.driving_valid} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Passport No : </label>
                            <input type="text" className="form-control" name="passport_number" defaultValue={this.state.passport_number} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Valid Upto : </label>
                            <input type="date" className="form-control" name="passport_valid" defaultValue={this.state.passport_valid} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Issued By : </label>
                            <input type="text" className="form-control" name="passport_issued_by" defaultValue={this.state.passport_issued_by} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Date : </label>
                            <input type="date" className="form-control" name="passport_date" defaultValue={this.state.passport_date} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <Link to={{ pathname: "/confirmbooking", state: this.state }} >
                        <button className="btn btn-primary" style={{ textAlign: "center", width: "20%" }}>Register</button>
                    </Link>
                    <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }} onClick={this.handleBack}>Back</button>
                </form>
            </React.Fragment>
        )
    }
    render() {
        
        return (
            <div>
                <Nav />
                <div className="" style={{ margin: "13vh 5%" }}>
                    <h2>Register Yourself : </h2><br />
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12">
                                    {this.getLogin()}
                                </div>
                                <div className="col-12">
                                    {this.getBookingDetails()}
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            {this.getForm()}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CustomerInfoPage;