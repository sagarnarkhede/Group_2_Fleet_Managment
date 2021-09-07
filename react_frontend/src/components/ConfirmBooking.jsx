import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

class ConfirmBooking extends Component {
  constructor(props) {
    super(props);
    var data = this.props.location.state;
    console.log("customer info ", data);
   
    this.state = {
      fdata: data,
    };
  }
  
    mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("Data In State",this.state.fdata);
    if (this.state.fdata._id == "") {
      console.log("new post");
      var url = "http://localhost:5555/clients/"
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

      var id =   this.state.fdata._id;
      axios.put('http://localhost:5555/clients/'+id)
        .then(async response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
    console.log(this.state);
  };

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
        <form
          className="form-group"
          onSubmit={this.mySubmitHandler}
          style={{
            border: "2px solid black",
            borderRadius: "30px",
            padding: "50px",
          }}
        >
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
                  <input type="text" name="" id="" className="form-control" value={this.state.fdata.selectaddress} />
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
                  <input type="text" name="" id="" className="form-control" value={this.state.fdata.selectaddress} />
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
              <input
                type="text"
                className="form-control"
                name="fname"
                value={this.state.fdata.fname}
                onChange={this.myChangeHandler}
              ></input>
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


          <button
            className="btn btn-primary"
            style={{ textAlign: "center", width: "20%" }}
          >
            Book Now
          </button>
          {/* <button
            className="btn btn-primary"
            style={{ textAlign: "center", float: "right", width: "20%" }}
          >
            Back
          </button> */}
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
