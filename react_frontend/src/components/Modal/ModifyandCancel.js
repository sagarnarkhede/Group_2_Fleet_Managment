 import React, { Component } from 'react';
import {   Button } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom';

import Modal from "react-bootstrap/Modal"
import axios from 'axios'

export default class ModifyandCancel extends Component {
    constructor(props) {
        super(props);
        // console.log("location", this.props);
        this.state = {
           showButtons: false,
           bookings:[],
           booking_id:"",
           client_data: [],
           data:{}
        }
      }
     
    mySubmitHandler = (event) => {
      event.preventDefault();
      //console.log(this.state);
    }
  myChangeHandler = (event) => {
      // this.setState({ [event.target.name]: event.target.value });
      this.state.client_data.forEach((ele)=>{
        ele.bookings.forEach((x)=>{
          if(x._id == event.target.value)
          {
           console.log("booking",ele);
           this.setState({data:ele})
           //this.setState({data.pickuptate:x.pickupdate})
          }
        })
      })
  }
componentDidMount(){
  axios.get("http://localhost:5555/clients/")
        .then(async response => {
          const client_arr = response.data.data;
          this.setState({ client_data: client_arr});
        })

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
       <h2>ModifyandCancel:</h2>
      </Modal.Title>
     </Modal.Header>
     <Modal.Body onSubmit={this.mySubmitHandler}>
     <div  style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
     <div class="text-left">
     <label> Booking Confirmation Number: </label><input type="text"  name="booking_id" onChange={this.myChangeHandler}></input>    
     <Link to={{ pathname: "/confirmbooking", state: this.state.data }} >
       <button type="button" class="btn btn-primary">Search</button>
       </Link>  
      </div><br/><br/>
      {this.state.showButtons && <div class="form-group">
                <button class="btn btn-primary" style = {{float: "center"}}
                        type="submit">
                     Modify
                </button>

                <button class="btn btn-primary" style = {{float: "right"}}
                        type="submit" onClick={this.props.onHide} >
                     Cancel
                </button>
            </div>
   }
        </div>
        
     </Modal.Body>
   </Modal>
    );
  }
}
