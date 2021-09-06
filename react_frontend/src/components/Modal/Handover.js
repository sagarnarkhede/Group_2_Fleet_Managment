
 
 import React, { Component } from 'react';
 import {   Button } from 'bootstrap'

 import Modal from "react-bootstrap/Modal"
  
 export default class Handover extends Component {
   render() {
     return (
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    {console.log(this.props)}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Booking Confirmation Number
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
        <h5>Vechile Registration Number:</h5>
        <h5>Car Status:</h5>
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
 