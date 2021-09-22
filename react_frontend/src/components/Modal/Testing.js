import React, { Component } from 'react';
import {   Button } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal"
import axios from 'axios'

export default class Testing extends Component {
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
       <h2 style={{color: 'white'}}>Testing Data:</h2>
      </Modal.Title>
     </Modal.Header>
     <Modal.Body onSubmit={this.mySubmitHandler}>
     <div  style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
     <div class="text-left">
       <h5 align="center">For the Testing Purpuse You Can Use Following Details</h5>
       <br/>
     <h3 align="center">Client LogIn Details : </h3>
     <p className="mb-0" align="center"> User Id : 612665386b949b076c55fea0</p>
     <p align="center">Password : Tushar@123</p>
     <br/>
     <h3 align="center">Admin LogIn Details : </h3>
     <p align="center" className="mb-0"> User Id : 6122937a55e1572fa8095e93</p>
     <p align="center">Password : 1234</p>
     
      </div>
        </div>
        
     </Modal.Body>
   </Modal>
    );
  }
}
