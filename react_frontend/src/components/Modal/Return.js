 import React, { Component } from 'react';
import {   Button } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal"
import axios from 'axios'
import InvalidBookId from './InvalidBookIdPop';

export default class Return extends Component {
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
      //this.setState({ [event.target.name]: event.target.value });
      var date = new Date()
      this.state.client_data.forEach((ele)=>{

        ele.bookings.forEach((x)=>{
          if(x._id == event.target.value)
          {
           this.setState({client_id:ele._id})
          this.setState({booking_id:x._id})
           ele.bookings=[]
           x.dropDate=date.toISOString().slice(0, 10)
           x.dropTime=date.getHours()+":"+date.getMinutes()
           ele.bookings.push(x)
           
           this.setState({data:ele})
           console.log("booking",ele);
           
          }
          else{
            console.log("invalid");
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
    console.log("bid",this.state);
  return(<Link to={{ pathname: "/printInvoice", state: {data: this.state.data,bookingid:this.state.booking_id,clientid:this.state.client_id,url:"return"} }} >
  <button type="button" class="btn btn-primary" style={{marginLeft: '300px'}}>Search</button>
  </Link>  )}
  else{
    return(<button type="button" class="btn btn-primary" style={{marginLeft: '300px'}} onClick={()=>this.setState({invalidbookmodalShow:true})}>Search</button>)
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
       <h2 style={{color: 'white'}}>Return Car</h2>
      </Modal.Title>
     </Modal.Header>
     <Modal.Body onSubmit={this.mySubmitHandler}>
     <div  style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
     <div class="text-left">
     <label style={{marginLeft: '50px'}}> Booking Confirmation Number : </label>   <input type="text"  name="booking_id" onChange={this.myChangeHandler}></input>    
     <br/><br/><br/>{this.getbtn()}
      </div><br/><br/>
      <img src="assets/img/return.svg" class="img-fluid" alt=""  width="300" height="200" style={{marginLeft: '220px'}}/>
      {/* <button type="button" class="btn btn-primary" onClick={()=>console.log(this.state)}>Search</button> */}
        </div>
        
     </Modal.Body>
   </Modal>
    </React.Fragment>
    );
  }
}
