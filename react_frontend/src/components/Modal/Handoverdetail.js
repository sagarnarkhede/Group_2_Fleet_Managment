import React, { Component } from 'react';
 import {   Button } from 'bootstrap'
 import axios from 'axios'
 import Modal from "react-bootstrap/Modal"
  
 export default class Handoverdetail extends Component {
  constructor(props) {
    super(props);
    // console.log("location", this.props);
    this.state = {
       
       bookings:[],
       booking_id:""
    }
  }
  myButtonHandler = () => {
    axios.get("http://localhost:5555/clients/"+this.state.booking_id)
    .then(async response => {
      const bookings_arr = response.data.data;
      this.setState({ bookings: bookings_arr});
      console.log("hii",this.state);

    })
      this.setState ({
        booking_id:""

      })
}
  mySubmitHandler = (event) => {
    event.preventDefault();
   // console.log(this.state);
  }
myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
        <h2>Handover:</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
      <label> Booking Confirmation Number: </label>  <input type="text"  name="booking_id" onChange={this.myChangeHandler}></input>  <button type="button" class="btn btn-primary" onClick={this.myButtonHandler}>Search</button><br/><br/>
      <label>Vehicle Registration Number</label> <input type="text"  name="Vehicle Registration Number"></input> <a href="/cardetail">Select Car</a>
       <br/><br/>
       <label>Car Status</label> <input type="text"  name="Car Status"></input><br/><br></br>
        <p style = {{display: "flex"}}>  <h5>Fuel Status:</h5><span>
        <div style = {{display: "flex"}} >
        <div class="form-check" className = "mr-30">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault2">
    1/4
  </label> 
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault2">
    1/2
  </label> 
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault2">
    3/4
  </label> 
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault2">
Full
  </label> 
</div>

 
</div>
        </span></p>
        </div>
         
      </Modal.Body>
      <Modal.Footer>
      <button className="btn btn-success float-left" onClick={this.props.onHide} >Done</button>
        <button className="btn btn-primary" onClick={this.props.onHide} >Close</button>
      
      </Modal.Footer>
    </Modal>
     );
   }
 }
 