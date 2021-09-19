import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Handoverdetail from "./Modal/Handoverdetail";

class ConfirmBooking extends Component {
  constructor(props) {
    super(props);
    console.log("confirmbooking info ", this.props.location.state);
    sessionStorage.removeItem("userdata"); 
   this.getState();
  }

  getState()
  {
    var data = this.props.location.state;
 
    if(this.props.location.state.url == "modify" || this.props.location.state?.url == "return" || this.props.location.state?.url == "cancelbooking" || this.props.location.state?.url == "handover")
    {
      var ob = data.data;
      
      for(let x in ob.bookings[0])
      {
        if(typeof ob.bookings[0][x] == "string"){
          //console.log(ob.bookings[0][x]);
         ob[x]=ob.bookings[0][x]
        }
        else if(typeof ob.bookings[0][x] == "object"){
          for(let y in ob.bookings[0][x])
          {
            // console.log("y",y+":"+ob.bookings[0][x][y]);
            ob[y]=ob.bookings[0][x][y]
          }
         }
      }
      ob.bookingid=data?.bookingid;
      ob.clientid=data?.clientid;
      console.log("ob",ob);
    return(
      this.state = {
        fdata: ob,
        send:{},
        handoverPopupShow:false
      }
    )
    }
    else{
      return(
        this.state = {
          fdata: data,
          send:this.props.location.state
        }
      )
    }
  }
 
    mySubmitHandler = (event) => {
    event.preventDefault();
    if(!(this.props.location.state.url == "modify" || this.props.location.state?.url == "return" || this.props.location.state?.url == "cancelbooking" || this.props.location.state?.url == "handover")){
    console.log("Data In State",this.state.fdata);
    var url = "http://localhost:5555/clients/"
    if (this.state.fdata._id == "") {
      console.log("new post");
      axios.post(url, this.state.fdata)
        .then(async response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.message);
        })
    }
    else {
      console.log("existing put");

      var id = this.state.fdata._id;
      axios.post(url +id, this.state.fdata)
        .then(async response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
    console.log(this.state);
  }
  };

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount(){
    if(this.props.location.state?.url == "modify" ){
    var data = this.props.location.state.data;
    data.fullData={
      camp: data.camp,
      nav: data.nav,
      chSeats: data.chSeats,
      quant: data.quant
    }
    data.fullData.cardetailsState = {
      cartype:data.cartype,
      locationState:{
        bookingState:{
          dropDate: data.dropDate,
          dropTime: data.dropTime,
          dropcity: data.dropcity,
          dropstate: data.dropstate,
          pickupDate: data.pickupDate,
          pickupTime: data.pickupTime,
          pickupcity: data.pickupcity,
          pickupstate: data.pickupstate,
          returncheck: data.returncheck,
          searchdropAirport: data.searchdropAirport,
          searchpickupAirport: data.searchpickupAirport,
          selectdroppAirport: data.selectdroppAirport,
          selectpickupAirport: data.selectpickupAirport
        },
        selectaddress:{
          address: data.inhand_center,
          cars:  [],
          centerid: data.centerid,
          centername: data.inhand_center,
          city: data.city,
          officetime: data.officetime,
          state: data.state,
          telphone: data.telphone,
          weeklyoff: data.weeklyoff,
          zip: data.zip
        }

      }
    }
    this.setState({send:data})
    // this.props.location.state=data
    // console.log("datac",this.props.location.state);

  }}
  cancelBooking= (event)=>{
    event.preventDefault();
    var ob = this.state.fdata.bookings[0]
    ob.booking_status="canceled"
    ob.cartype=this.state.fdata.bookings[0].vehical_details?.cartype
    ob.invoice_number=this.state.fdata.bookings[0].invoice?.invoice_number
    ob.amount=this.state.fdata.bookings[0].invoice?.amount
    ob.nav=this.state.fdata.bookings[0].addon?.nav
    ob.camp=this.state.fdata.bookings[0].addon?.camp
    ob.chSeats=this.state.fdata.bookings[0].addon?.chSeats
    ob.quant=this.state.fdata.bookings[0].addon?.quant

    axios.put("http://localhost:5555/clients/"+this.props.location.state.clientid+"/"+this.props.location.state.bookingid,ob)
          .then(async response => {
          const booking = response.data.data;
          console.log("bookingdata",booking);
          })
          .catch(error => {
            console.log(error.message);
          })
          console.log("cancelstate",ob);
  }
  getBtn()
  {
    //console.log("d",this.props.location.state);
    if(this.props.location.state.url == "return"){
      return(
        <React.Fragment>
      <button className="btn btn-primary" style={{ textAlign: "center", width: "20%" }}>Return</button>
      <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }}>Back</button>
        </React.Fragment>
      )
    }
    else  if(this.props.location.state.url == "cancelbooking"){
      return(
        <React.Fragment>
     <button
              className="btn btn-primary"
              style={{ textAlign: "center", float: "center", width: "20%" }}
              onClick={this.cancelBooking}
            >
              Cancel Booking
            </button>
        </React.Fragment>
      )
    }
    else if(this.props.location.state.url == "modify"){
      return(
        <React.Fragment>
      <Link to={{ pathname: "/CustomerInfoPage", state: {data:this.state.send,url:"confirmbooking"} }} > 
      <button
              className="btn btn-primary"
              style={{ textAlign: "center", width: "20%" }}
            >
              Modify
            </button></Link>
            <button
              className="btn btn-primary"
              style={{ textAlign: "center", float: "right", width: "20%" }}
              onClick={this.cancelBooking}
            >
              Cancel Booking
            </button>
            </React.Fragment>
      )
    }
    else if(this.props.location.state.url == "handover"){
      return(
        <React.Fragment>
      
      <button
              className="btn btn-primary"
              style={{ textAlign: "center", width: "20%" }}
              onClick={()=>this.setState({handoverPopupShow:true})}
            >
              Hand-Over
            </button>
            <button
              className="btn btn-primary"
              style={{ textAlign: "center", float: "right", width: "20%" }}
              onClick={this.cancelBooking}
            >
              Back
            </button>
            </React.Fragment>
      )
    }
    else{
    return(
      <React.Fragment>
    <button
            className="btn btn-primary"
            style={{ textAlign: "center", width: "20%" }}
          >
            Book Now
          </button>
          <Link to={{ pathname: "/CustomerInfoPage", state: {data:this.state.send,url:"confirmbooking"} }} > 
          <button
            className="btn btn-primary"
            style={{ textAlign: "center", float: "right", width: "20%" }}
          >
            Modify
          </button></Link>
          </React.Fragment>
    )
    }
  }
  
  getBookingDetails() {
    return (
      <div
        style={{
          border: "2px solid black",
          borderRadius: "30px",
          padding: "50px",
        }}
      ></div>
    );
  }
  getForm() {
    return (
      <React.Fragment>
        <Handoverdetail show={this.state.handoverPopupShow} onHide={() => this.setState({handoverPopupShow:false})} data={this.state.fdata}/>
        <form className="form-group" onSubmit={this.mySubmitHandler} style={{   border: "2px solid black",borderRadius: "30px",   padding: "50px", }}>
          <label>Your Booking : </label>
          <br />
          <br />
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Pick-up :</label>
                  <br /><br />
                </div>
                <div className="col-4">
                  <input type="date" className="form-control" name="" id="" value={this.state.fdata.pickupDate} />
                </div>
                <div className="col-4">
                  <input type="time" className="form-control" name="" id="" value={this.state.fdata.pickupTime} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Pick-up at :</label>
                </div>
                <div className="col-9">
                  <input type="text" name="" id="" className="form-control" value={this.state.fdata.inhand_center} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Reture :</label>
                  <br /><br />
                </div>
                <div className="col-4">
                  <input type="date" className="form-control" name="" id="" value={this.state.fdata.dropDate} />
                </div>
                <div className="col-4">
                  <input type="time" className="form-control" name="" id="" value={this.state.fdata.dropTime} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Return at :</label>
                </div>
                <div className="col-9">
                  <input type="text" name="" id="" className="form-control" value={this.state.fdata.handover_center} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Vehicle :</label>
                </div>
                <div className="col-8">
                  <input type="text" name="" id="" className="form-control" value={this.state.fdata.cartype} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Ad-Ons : </label>
                </div>
                <div className="col-9">
                  <input type="text" name="" id="" className="form-control" value={this.state.fdata.nav + " " + this.state.fdata.camp + " " + this.state.fdata.chSeats + " " + this.state.fdata.quant} />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <label>First Name : </label>
              <input type="text" className="form-control" name="fname" value={this.state.fdata.fname} onChange={this.myChangeHandler}></input>
            </div>
            <div className="col-6">
              <label>Last Name : </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={this.state.fdata.lname}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />
          <label>Address 1 : </label>
          <input
            type="text"
            className="form-control"
            name="address1"
            value={this.state.fdata.address1}
            onChange={this.myChangeHandler}
          ></input>
          <br />
          <label>Address 2: </label>
          <input
            type="text"
            className="form-control"
            name="address2"
            value={this.state.fdata.address2}
            onChange={this.myChangeHandler}
          ></input>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Email : </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.fdata.email}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Estimated Amt : </label>
              <input
                type="text"
                className="form-control"
                name="amount"
                value={this.state.fdata.amount}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Phone Number : </label>
              <input
                type="text"
                className="form-control"
                name="phone_number"
                value={this.state.fdata.phone_number}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Cell : </label>
              <input
                type="text"
                className="form-control"
                name="mobile_number"
                value={this.state.fdata.mobile_number}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Date of Birth : </label>
              <input
                type="date"
                className="form-control"
                name="date_of_birth"
                value={this.state.fdata.date_of_birth}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Zip Code : </label>
              <input
                type="number"
                className="form-control"
                name="zip"
                value={this.state.fdata.zip}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>City : </label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={this.state.fdata.city}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>State : </label>
              <input
                type="text"
                className="form-control"
                name="state"
                value={this.state.fdata.state}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Card Type : </label>
              <input
                type="text"
                className="form-control"
                name="card_type"
                value={this.state.fdata.card_type}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Card Number : </label>
              <input
                type="text"
                className="form-control"
                name="card_number"
                value={this.state.fdata.card_number}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Local Driving Lic : </label>
              <input
                type="text"
                className="form-control"
                name="driving_lic"
                value={this.state.fdata.driving_lic}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>IDP# : </label>
              <input
                type="text"
                className="form-control"
                name="IDP"
                value={this.state.fdata.IDP}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Issuer By : </label>
              <input
                type="text"
                className="form-control"
                name="driving_issued_by"
                value={this.state.fdata.driving_issued_by}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Valid Upto : </label>
              <input
                type="date"
                className="form-control"
                name="driving_valid"
                value={this.state.fdata.driving_valid}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Passport No : </label>
              <input
                type="text"
                className="form-control"
                name="passport_number"
                value={this.state.fdata.passport_number}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Valid Upto : </label>
              <input
                type="date"
                className="form-control"
                name="passport_valid"
                value={this.state.fdata.passport_valid}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-6">
              <label>Issued By : </label>
              <input
                type="text"
                className="form-control"
                name="passport_issued_by"
                value={this.state.fdata.passport_issued_by}
                onChange={this.myChangeHandler}
              ></input>
            </div>
            <div className="col-6">
              <label>Date : </label>
              <input
                type="date"
                className="form-control"
                name="passport_date"
                value={this.state.fdata.passport_date}
                onChange={this.myChangeHandler}
              ></input>
            </div>
          </div>
          <br />


          {this.getBtn()}
        </form>
      </React.Fragment>
    );
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="" style={{ margin: "13vh 10%" }}>
          <h1 className="compHeading">Confirm Your Booking : </h1>
          <br />
          {this.getForm()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ConfirmBooking;
