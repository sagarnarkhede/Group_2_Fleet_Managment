import React, { Component } from 'react';
import {   Button } from 'bootstrap'
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal"
import axios from 'axios'
import FailPop from './FailPop';
import SuccesPop from './SuccesPop';
export default class AreYouSurePop extends Component {
    constructor(props) {
        super(props);
        // console.log("r u s",this.props);
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
closepopup = ()=>{
  this.props.onHide()
  this.setState({failmodalShow:true})
}
  render() {
    return (
      <React.Fragment>
      <FailPop show={this.state.failmodalShow} onHide={() =>this.setState({failmodalShow:false})}/> 
       <Modal
     {...this.props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    // style={{borderRadius: '5px'}}
    style={{ borderRadius: '15px'  }}
   >
   {/* {console.log(this.props)} */}
     <Modal.Header closeButton style={{backgroundColor: 'darkblue'}}>
       <Modal.Title id="contained-modal-title-vcenter">
       <h2 style={{color: 'white'}}>Cancel Booking:</h2>
      </Modal.Title>
     </Modal.Header>
     <Modal.Body onSubmit={this.mySubmitHandler}>
     <div  style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
     <div class="text-left">
     <h2 align="center">Are You Sure</h2>
     <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ssIwdK.json"
                                                        
                                                        background="transparent" speed="1.5" style={{marginLeft: '210px', width: "200px", height: "200px" }}
                                                        loop autoplay></lottie-player><br/>
     <button className="btn btn-primary" style={{ textAlign: "center", float: "left", width: "20%" }}  
     onClick={this.props.cancel}
     >Yes</button>
     <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }} onClick={this.closepopup}>No</button>
      </div><br/><br/>
      {/* <button type="button" class="btn btn-primary" onClick={()=>console.log(this.state)}>Search</button> */}
        </div>
        
     </Modal.Body>
   </Modal>
   </React.Fragment>
    );
  }
}
