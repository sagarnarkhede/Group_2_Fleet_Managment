import React, { Component } from 'react';
 import {   Button } from 'bootstrap'
 import axios from 'axios'
 import Modal from "react-bootstrap/Modal"
import SelectCar from './SelectCar';
  
 export default class Handoverdetail extends Component {
  constructor(props) {
    super(props);
    console.log("hadover props", this.props);
    this.state = {
       data:this.props.data,
       selectedCar:"",
       centerData1:"",
       carStatus:"",
       fuelStatus:"",
       selectcarPopupShow:false
    }
  }
//   myButtonHandler = () => {
//     axios.get("http://localhost:5555/clients/"+this.state.data.booking_id)
//     .then(async response => {
//       const bookings_arr = response.data.data;
//       this.setState({ bookings: bookings_arr});
//       console.log("hii",this.state);

//     })
// }
  mySubmitHandler = (event) => {
    event.preventDefault();
   // console.log(this.state);
  }
myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}
selectcar = ()=>{
    this.setState({selectcarPopupShow:true})
   
}
componentDidMount(){
  var staffid = sessionStorage.getItem("staff");
  var staffData = "";
  var centerData = "";
  axios.get("http://localhost:5555/office/"+staffid)
          .then(async response => {
          staffData = response.data.data;
          // console.log("staffData",staffData);
            axios.get("http://localhost:5555/centers/"+staffData.centername)
                .then(async response => {
                centerData = response.data.data;
                this.setState({centerData1:centerData})
                // console.log("centerdata",centerData);
                })
                .catch(error => {
                  console.log(error);
                })
            })
            .catch(error => {
              console.log(error.message);
            }) 
}
getSelectcarPopup = ()=>{
  if(this.state.centerData1 != ""){
  return(<SelectCar show={this.state.selectcarPopupShow} onHide={() => {this.setState({selectcarPopupShow:false,selectedCar:this.state.centerData1.cars[sessionStorage.getItem("i")]});sessionStorage.removeItem("i")}} data={this.state}/>
  )
  }
}
handoverit = ()=>{
  // console.log("fdata",this.state);

  var ob = this.state.data.bookings[0]
    ob.booking_status="handover"
    ob.cartype=this.state.data.bookings[0].vehical_details?.cartype
    ob.carname=this.state.selectedCar.carname
    ob.carno=this.state.selectedCar.carno
    ob.invoice_number=this.state.data.bookings[0].invoice?.invoice_number
    ob.amount=this.state.data.bookings[0].invoice?.amount
    ob.nav=this.state.data.bookings[0].addon?.nav
    ob.camp=this.state.data.bookings[0].addon?.camp
    ob.chSeats=this.state.data.bookings[0].addon?.chSeats
    ob.quant=this.state.data.bookings[0].addon?.quant
    ob.fuelStatus=this.state.fuelStatus;
    ob.carStatus=this.state.carStatus;
   
  axios.put("http://localhost:5555/clients/"+this.state.data.clientid+"/"+this.state.data.bookingid,ob)
          .then(async response => {
          const booking = response.data.data;
          // console.log("bookingdata",booking);
          })
          .catch(error => {
            console.log(error.message);
          })
  // console.log("clientOb",ob);
}
   render() {
     return (
       <React.Fragment>
          {/* {console.log("this.state",this.state)} */}
         {this.getSelectcarPopup()}
      
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    {/* {console.log(this.props)} */}
      <Modal.Header closeButton style={{backgroundColor: 'darkblue'}}>
        <Modal.Title id="contained-modal-title-vcenter">
        <h2 style={{color: 'white'}}>Handover:</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
      <label> Booking Confirmation Number: </label>  <input type="text"  name="booking_id" value={this.state.data.bookingid} onChange={this.myChangeHandler}></input>  <button type="button" class="btn btn-primary" disabled>Search</button><br/><br/>
      <label>Vehicle Registration Number</label> <input type="text"  name="Vehicle Registration Number" defaultValue={this.state.selectedCar?.carno}></input> <button type="button" class="btn btn-primary" onClick={this.selectcar}>Select Car</button>
       <br/><br/>
       <label>Car Status</label> <input type="text"  name="carStatus" onChange={this.myChangeHandler}></input><br/><br></br>
        <p style = {{display: "flex"}}>  <label>Fuel Status:</label><span>
        <div style = {{display: "flex"}} >
        <div class="form-check" className = "mr-30">
              <input className="form-check-input" type="radio" name="fuelStatus" value="1/4" id="flexRadioDefault1" onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
                1/4
              </label> 
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="fuelStatus" value="1/2" id="flexRadioDefault1" onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
                1/2
              </label> 
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="fuelStatus" value="3/4" id="flexRadioDefault1" onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
                3/4
              </label> 
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="fuelStatus" value="full" id="flexRadioDefault1"  onChange={this.myChangeHandler}/>
              <label class="form-check-label" for="flexRadioDefault2">
            Full
              </label> 
            </div>

            
            </div>
        </span></p>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <button className="btn btn-primary float-left" onClick={this.handoverit} >HandOver</button>
        {/* <button className="btn btn-primary" onClick={this.props.onHide} >Close</button> */}
      
      </Modal.Footer>
    </Modal>

    </React.Fragment>
     );
   }
 }
 