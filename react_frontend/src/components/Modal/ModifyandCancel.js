 import React, { Component } from 'react';
import {   Button } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom';

import Modal from "react-bootstrap/Modal"
import axios from 'axios'
import InvalidBookId from './InvalidBookIdPop';

export default class ModifyandCancel extends Component {
    constructor(props) {
        super(props);
        // console.log("location", this.props);
        this.state = {
           showButtons: false,
           bookings:[],
           booking_id:"",
           client_id: "",
           client_data: [],
           data:{},
           invalidbookmodalShow:false
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
            this.setState({client_id:ele._id})
            this.setState({booking_id:x._id})
           console.log("booking",ele._id);
           ele.bookings=[]
           ele.bookings.push(x)
          //  ele._id=this.state.client_id
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
getbtn()
{
  
  if(this.state.booking_id != ""){
    
    var mydata = this.state.data
    mydata._id=this.state.client_id
    console.log("bid",mydata);
  return(<Link to={{ pathname: "/confirmbooking", state: {data: mydata,bookingid:this.state.booking_id,clientid:this.state.client_id,url:"modify"} }} >
  <button type="button" class="btn btn-primary" >Search</button>
  </Link>  )}
  else{
    return(<button type="button" class="btn btn-primary" onClick={()=>this.setState({invalidbookmodalShow:true})}>Search</button>)
  }

}
  render() {
    return (
      <React.Fragment>
      <InvalidBookId show={this.state.invalidbookmodalShow} onHide={() =>this.setState({invalidbookmodalShow:false})}/> 
       <Modal
     {...this.props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
   {/* {console.log(this.props)} */}
     <Modal.Header closeButton style={{backgroundColor: 'darkblue'}}>
       <Modal.Title id="contained-modal-title-vcenter">
       <h2 style={{color: 'white'}}>ModifyandCancel:</h2>
      </Modal.Title>
     </Modal.Header>
     <Modal.Body onSubmit={this.mySubmitHandler}>
     <div  style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
     <div class="text-left">
     <label> Booking Confirmation Number: </label><input type="text"  name="booking_id" onChange={this.myChangeHandler}></input>    
     {this.getbtn()}  
      </div><br/><br/>
        </div>
        
     </Modal.Body>
   </Modal>
   </React.Fragment>
   );
  }
}
