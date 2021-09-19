import React, { Component } from 'react';
 import {   Button } from 'bootstrap'
 import axios from 'axios'
 import Modal from "react-bootstrap/Modal"
  
 export default class ReturnDetails extends Component {
  constructor(props) {
    super(props);
    console.log("returndetails", this.props);
    this.state = {
       
       bookings:[],
       booking_id:"",
       carStatus:"",
       fuelStatus:"",
       data:this.props.data
    }
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
   // console.log(this.state);
  }
myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}
confirmReturn = () =>{
  var ob = this.state.data.bookings[0]
    ob.booking_status="Complited"
    ob.cartype=this.state.data.bookings[0].vehical_details?.cartype
    ob.invoice_number=this.state.data.bookings[0].invoice?.invoice_number
    ob.amount=this.state.data.bookings[0].invoice?.amount
    ob.nav=this.state.data.bookings[0].addon?.nav
    ob.camp=this.state.data.bookings[0].addon?.camp
    ob.chSeats=this.state.data.bookings[0].addon?.chSeats
    ob.quant=this.state.data.bookings[0].addon?.quant
    //ob.fuelStatus=this.state.fuelStatus;
    //ob.carStatus=this.state.carStatus;


    axios.put("http://localhost:5555/clients/"+this.state.data.clientid+"/"+this.state.data.bookingid,ob)
          .then(async response => {
          const booking = response.data.data;
          console.log("bookingdata",booking);
          })
          .catch(error => {
            console.log(error.message);
          })
          // console.log("complited ob",ob);
          // console.log("complited it",this.state);
}
   render() {
     return (
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    {/* {console.log(this.props)} */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h2>Return:</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
      <label> Booking Confirmation Number: </label>  <lable>{this.state.data._id}</lable><br/><br/>
      <label>Vehicle Registration Number : </label> <lable>{this.state.data.vehical_number}</lable>
       <br/><br/>
       <label>Car Status</label> <input type="text"  name="carStatus" onChange={this.myChangeHandler}></input><br/><br></br>
        <p style = {{display: "flex"}}>  <label>Fuel Status:</label><span>
        <div style = {{display: "flex"}} >
        <div class="form-check" className = "mr-30">
              <input className="form-check-input" type="radio" name="fuelStatus" value="1/4" id="flexRadioDefault1" onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
                1/4
              </label> 
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="fuelStatus" value="1/2" id="flexRadioDefault1" onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
                1/2
              </label> 
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="fuelStatus" value="3/4" id="flexRadioDefault1" onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
                3/4
              </label> 
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="fuelStatus" value="full" id="flexRadioDefault1"  onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
            Full
              </label> 
            </div>

            
            </div>
        </span></p>
        </div>
         
      </Modal.Body>
      <Modal.Footer>
      <button className="btn btn-primary float-left" onClick={this.confirmReturn} >Done</button>
        <button className="btn btn-primary" onClick={this.props.onHide} >Close</button>
      
      </Modal.Footer>
    </Modal>
     );
   }
 }
 