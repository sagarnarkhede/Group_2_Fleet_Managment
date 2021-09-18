import React, { Component } from 'react';
import {   Button } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal"
import axios from 'axios'

export default class SuccesPop extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           showButtons: false,
        
        }
      }
     
    mySubmitHandler = (event) => {
      event.preventDefault();
      //console.log(this.state);
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
     <Modal.Header closeButton style={{backgroundColor: 'darkblue'}}>
       <Modal.Title id="contained-modal-title-vcenter">
       <h2 style={{color: 'white'}}>Cancle Booking:</h2>
      </Modal.Title>
     </Modal.Header>
     <Modal.Body onSubmit={this.mySubmitHandler}>
     <div  style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
     <div class="text-left">
     <h2 align="center">Cancle Succesful</h2>
     <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_SvgCXs.json"
                                                        
                                                        background="transparent" speed="1.5" style={{marginLeft: '210px', width: "200px", height: "200px" }}
                                                        loop autoplay></lottie-player>
      </div><br/><br/>
      {/* <button type="button" class="btn btn-primary" onClick={()=>console.log(this.state)}>Search</button> */}
        </div>
        
     </Modal.Body>
   </Modal>
    );
  }
}
