import React, { Component } from 'react';
 import {   Button } from 'bootstrap'
 import axios from 'axios'
 import Modal from "react-bootstrap/Modal"
  
 export default class SelectCar extends Component {
  constructor(props) {
    super(props);
    // console.log("selectcar props", this.props);
    this.state = {
       data:this.props.data,
       //selectedCar:{}
    }
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
   // console.log(this.state);
  }
myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}
getCarlist = ()=>{
  
  // var x = this.state.data.centerData1.cars.filter((ele)=>{
  //   return ele.cartype == "small car"
  // })
  // console.log("aaa",this.state);
  this.state.data.centerData1.cars.forEach((ele)=>{
    return(
          <tr>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
                                  
          </tr>
    )
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
        <h2>Select Car:</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table class="table table-striped" onSubmit={this.mySubmitHandler}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Car Number</th>
                                    <th scope="col">Car Name</th>
                                    <th scope="col">Fuel Status</th>
                                    <th scope="col">Car Status</th>
                                    {/* <th scope="col">Monthly Rate</th> */}
                                    <th scope="col" >Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {this.state.data.centerData1.cars.map((ele,i)=>{
                                  return(
                                        <tr>
                                          <th scope="col">{i+1}</th>
                                          <th scope="col">{ele.carno}</th>
                                          <th scope="col">{ele.carname}</th>
                                          <th scope="col">{ele.fuelStatus}</th>
                                          <th scope="col">{ele.carStatus}</th>
                                          <th scope="col"><button id="compcar"  className="btn btn-primary" onClick={()=>{sessionStorage.setItem("i",i);this.props.onHide()}} >select</button></th>
                                                                
                                        </tr>
                                  )
                              })}
                               
                            </tbody>
                        </table>  
                        {this.getCarlist()}    
      </Modal.Body>
      <Modal.Footer>
      {/* <button className="btn btn-success float-left" onClick={this.props.onHide} >Done</button>
        <button className="btn btn-primary" onClick={this.props.onHide} >Close</button> */}
      
      </Modal.Footer>
    </Modal>
     );
   }
 }
 