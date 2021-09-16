 import React, { Component } from 'react';
import {   Button } from 'bootstrap'

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
           client_data: []
        }
      }

      showButtons1 = () => {
        this.state.client_data.forEach((ele)=>{
          ele.bookings.forEach((x)=>{
            if(x._id == this.state.booking_id)
            {
             console.log("booking",ele);
            }
          })
        })
        
          this.setState ({
            showButtons: true

          })
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      //console.log(this.state);
    }
  myChangeHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value });
  }
componentDidMount(){
  axios.get("http://localhost:5555/clients/")
        .then(async response => {
          const client_arr = response.data.data;
          this.setState({ client_data: client_arr});
          //console.log("hii",this.state);

        })

}
   //http://localhost:5555/clients/"+ele._id+booking_id
  //ele._id client cha id put method call 


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
     <label> Booking Confirmation Number: </label><input type="text"  name="booking_id" onChange={this.myChangeHandler}></input>    <button type="button" class="btn btn-primary" onClick = {this.showButtons1}>Search</button>
         
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
     {/* <Modal.Footer>
       <button className="btn btn-primary" onClick={this.props.onHide } >Close</button>
     </Modal.Footer> */}
   </Modal>
    );
  }
}
