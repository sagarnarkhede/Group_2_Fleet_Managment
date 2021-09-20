import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import { Switch, Route, Link } from "react-router-dom";
class Addon extends Component {
  constructor(props) {
    super(props);
    console.log("addon", this.props);
    this.state={
      quant : ''
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleBack = this.handleBack.bind(this)
    this.getStates()
  }
  getStates() {
    if (this.props.location.state.url == "custemerinfo") {
      var data = this.props.location.state.data  //addon is not working bcz of checkboxes
      console.log("data", data);
      return (
        this.state = {
          cardetailsState: data.cardetailsState,
          nav: data.nav,
          camp: data.comp,
          chSeats: data.chSeats,
          quant: ''
        }
      )
    }
    else {
      return (
        this.state = {
          cardetailsState: this.props.location.state,
          nav: "",
          camp: "",
          chSeats: "",
          quant: ''
        })
    }
  }
  handleDropdownChange(e) {
    this?.setState({ quant: e.target.value });
  }

  handleBack() {
    this.props.history.goBack()
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  getcontinewbtn() {
    if (this.props.location?.state.url == "custemerinfo") {
      var updatedData = this.props.location?.state.data;
      updatedData = this.state;
      //this.props.location.state.data?.cardetailsState?.locationState.bookingState
      return (
        <Link to={{ pathname: "/CustomerInfoPage", state: updatedData }} >
          <button className="btn btn-primary" style={{ textAlign: "center" }}>Continue Booking</button>
        </Link>
      )
    }
    else {
      return (
        <Link to={{ pathname: "/CustomerInfoPage", state: this.state }} >
          <button className="btn btn-primary" style={{ textAlign: "center" }}>Continue Booking</button>
        </Link>)
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="" style={{ margin: "13vh 15%" }}>
          <h2>Rental Add-ons : </h2><br />
          <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>

            <div class="container">
              <div class="row">
                <div class="col">
                  <input type="checkbox" id="1" name="nav" value="B" onClick={async () => { await this.setState({ nav: "GPS Navigation System" }); console.log(this.state) }}></input> <label for="1"> GPS Navigation System</label>
                </div>
                <div class="col-8">
                  &#36;10.00 /day
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="checkbox" id="1" name="camp" value="B" onClick={async () => { await this.setState({ camp: "Camping Kit" }); console.log(this.state) }}></input> <label for="1"> Camping Kit</label>
                </div>
                <div class="col-8">
                  &#36;30.00 /day
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="checkbox" id="1" name="chSeats" value="B" onClick={async () => { await this.setState({ chSeats: "Child Seats" }); console.log(this.state) }}></input> <label for="1"> Child Seats</label>
                </div>
                <div class="col-8">
                  &#36;15.00 /day
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Please enter no. of seats </label>
                </div>
                <div class="col-8">
                    <select id="dropdown" onChange={this.handleDropdownChange}>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                </div>
              </div>
            </div>


            <br />
            <br />
            {this.getcontinewbtn()}
            <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }} onClick={this.handleBack} >Back</button>



            {/* <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Sign In</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float:"right" ,width:"20%"}}>Sign Up</button> */}
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Addon;