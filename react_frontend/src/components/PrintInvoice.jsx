import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
class PrintInvoice extends Component {
  constructor(props) {
    super(props);
    console.log("PrintInvoice info ", this.props.location.state);
    //sessionStorage.removeItem("userdata"); 
   this.getState();
  }

  getState()
  {
    var data = this.props.location.state;
 
    if( this.props.location.state?.url == "return")
    {
      var ob = data.data;
      
      for(let x in ob.bookings[0])
      {
        if(typeof ob.bookings[0][x] == "string"){
          //console.log(ob.bookings[0][x]);
         ob[x]=ob.bookings[0][x]
        }
        else if(typeof ob.bookings[0][x] == "object"){
          for(let y in ob.bookings[0][x])
          {
            // console.log("y",y+":"+ob.bookings[0][x][y]);
            ob[y]=ob.bookings[0][x][y]
          }
         }
      }
      console.log("ob",ob);
    return(
      this.state = {
        fdata: ob,
        send:{},
      }
    )
    }
  }
 
    mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("Data In State",this.state.fdata);
    var url = "http://localhost:5555/clients/"
    if (this.state.fdata._id == "") {
      console.log("new post");
      axios.post(url, this.state.fdata)
        .then(async response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.message);
        })
    }
    else {
      console.log("existing put");

      var id = this.state.fdata._id;
      axios.post(url +id, this.state.fdata)
        .then(async response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
    console.log(this.state);
  };

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount(){
    if(this.props.location.state?.url == "modify" ){
    var data = this.props.location.state.data;
    data.fullData={
      camp: data.camp,
      nav: data.nav,
      chSeats: data.chSeats,
      quant: data.quant
    }
    data.fullData.cardetailsState = {
      cartype:data.cartype,
      locationState:{
        bookingState:{
          dropDate: data.dropDate,
          dropTime: data.dropTime,
          dropcity: data.dropcity,
          dropstate: data.dropstate,
          pickupDate: data.pickupDate,
          pickupTime: data.pickupTime,
          pickupcity: data.pickupcity,
          pickupstate: data.pickupstate,
          returncheck: data.returncheck,
          searchdropAirport: data.searchdropAirport,
          searchpickupAirport: data.searchpickupAirport,
          selectdroppAirport: data.selectdroppAirport,
          selectpickupAirport: data.selectpickupAirport
        },
        selectaddress:{
          address: data.inhand_center,
          cars:  [],
          centerid: data.centerid,
          centername: data.inhand_center,
          city: data.city,
          officetime: data.officetime,
          state: data.state,
          telphone: data.telphone,
          weeklyoff: data.weeklyoff,
          zip: data.zip
        }

      }
    }
    this.setState({send:data})
    // this.props.location.state=data
    // console.log("datac",this.props.location.state);

  }}

  getBtn()
  {
    if(this.props.location.state.url == "return"){
      return(
        <React.Fragment>
      <button className="btn btn-primary" style={{ textAlign: "center", width: "20%" }}>Return</button>      
      <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }} onClick={(event)=>{event.preventDefault();this.props.history.goBack()}}>Back</button>
        </React.Fragment>
      )
    }
    
  }
  
  getBookingDetails() {
    return (
      <div
        style={{
          border: "2px solid black",
          borderRadius: "30px",
          padding: "50px",
        }}
      ></div>
    );
  }
  getForm() {
    var valuecss ={
      marginLeft:"10px",
      fontSize:"18px",
      fontWeight:500,
      color:"black"
    }
    return (
      <React.Fragment>
        <form className="form-group" onSubmit={this.mySubmitHandler} style={{   border: "2px solid black",borderRadius: "30px",   padding: "50px", }}>
          <label>Your Booking : </label>
          <br />
          <br />
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Pick-up :</label>
                  <br /><br />
                </div>
                <div className="col-8">
                <label style={valuecss}>{this.state.fdata.pickupDate} at {this.state.fdata.pickupTime}</label>
                </div>
                {/* <div className="col-4">
                <label style={valuecss}></label>
                </div> */}
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Pick-up at :</label>
                </div>
                <div className="col-9">
                <label style={valuecss}>{this.state.fdata.inhand_center}</label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Reture :</label>
                  <br /><br />
                </div>
                <div className="col-8">
                <label style={valuecss}>{this.state.fdata.dropDate} at {this.state.fdata.dropTime}</label>
                </div>
                {/* <div className="col-4">
                <label style={valuecss}></label>
                </div> */}
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Return at :</label>
                </div>
                <div className="col-9">
                <label style={valuecss}>{this.state.fdata.handover_center} </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Vehicle :</label>
                </div>
                <div className="col-8">
                <label style={valuecss}>{this.state.fdata.cartype} </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Ad-Ons : </label>
                </div>
                <div className="col-9">
                <label style={valuecss}>{this.state.fdata.nav + " " + this.state.fdata.camp + " " + this.state.fdata.chSeats + " " + this.state.fdata.quant} </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-auto">
                  <label>First Name :</label>
                  <br /><br />
                </div>
                <div className="col-8">
                <label style={valuecss}>{this.state.fdata.fname}</label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Last Name:</label>
                </div>
                <div className="col-9">
                <label style={valuecss}>{this.state.fdata.lname}</label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Address :</label>
                  <br /><br />
                </div>
                <div className="col-8">
                <label style={valuecss}>{this.state.fdata.address1}</label>
                </div>
                {/* <div className="col-4">
                <label style={valuecss}></label>
                </div> */}
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>User ID :</label>
                </div>
                <div className="col-9">
                 <label style={valuecss}>{this.state.fdata._id} </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label>Email :</label>
                </div>
                <div className="col-8">
                <label style={valuecss}>{this.state.fdata.email}</label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-auto">
                  <label>Phone Number : </label>
                </div>
                <div className="col-7">
                <label style={valuecss}>{this.state.fdata.phone_number} </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          
          <br />
          <label>Invoice : </label>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Discription</th>
                <th scope="col">Qty</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Car Rent</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>GPS Navigation System	</td>
                <td>1</td>
                <td>$10.00 /day</td>
                <td>123</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Camping Kit	</td>
                <td>1</td>
                <td>$30.00/day</td>
                <td>123</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Child Seats	</td>
                <td>2</td>
                <td>$2.00/day  </td>
                <td>123</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td><b>Final Amount: </b></td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
          {this.getBtn()}
        </form>
      </React.Fragment>
    );
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="" style={{ margin: "13vh 10%" }}>
          <h1 className="compHeading">Return : </h1>
          <br />
          {this.getForm()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default PrintInvoice;
