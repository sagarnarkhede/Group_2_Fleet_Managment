import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import axios from "./Axios/Axios";
import { Switch, Route, Link } from "react-router-dom";

export default class Location extends Component {
  constructor(props) {
    super(props);
    console.log("location", this.props);
    this.state = {
      address: [],
      selectaddress: [],       
    }
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  myChangeHandler = (event) => {
  
  }

  componentDidMount() {

    var a = this.props.location.state.airportdata;      //database data
    var b = this.props.location.state.searchpickupAirport;  //user selected location
    var add = [];

    console.log("Array", a.length);
    for (var x = 0; x < a.length; x++) {
      if (a[x].airportname == b) {
        console.log("nearest Center Array :", a[x].nearestcenter.length);
        for (var y = 0; y < a[x].nearestcenter.length; y++) {
          var p = a[x].nearestcenter[y];
          console.log(p);
          axios.get("http://localhost:5555/centers/"+p)
            .then(async response => {
            const Locations = response.data.data;
              // this.setState({address:Locations});
              await add.push(Locations)
              this.setState({address:add})
              console.log("add",this.state);
            })
            .catch(error => {
              console.log(error.message);
            })
        }
      }
    }




  //   axios
  //   .get(`/centers`, {})
  //   .then(res => {
  //     const data = res.data.data;
  //     this.setState({
  //       address: data
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });


  
  }

 handleSelect =async (data) => {
   await this.setState({
    selectaddress: data
   })
   console.log(this.state.selectaddress, "selet")
 }

  render() {
    return (
      <div>
        <Nav />
        <div className="" style={{ margin: "13vh 15%" }}>
          <h2>Select Pickup/Return Location :</h2><br />
          <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
            <h5 className="loactiontitle"> Your Loaction have matches {this.state.address.length} location, please select one</h5>
            <div className="row">
              <div className="col-6">
                {this.state.address.map((u) => (
                  <div>
                    <div className="card" style={{ width: "40rem" }}>
                      <div className="card-body">
                        <p>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"   key={u._id} onClick={() => this.handleSelect(u)}/>
                            <p class="form-check-label" for="flexRadioDefault1">
                              <h2>{u.address} </h2>
                              Contact No:  {u.telphone}<br />
                              Office Time: {u.officetime}<br />
                              Weekly Off:  {u.weeklyoff}</p>
                          </div></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> 
            </div> <br /><br />
            <Link to={{ pathname: "/cardetail", state: this.state }} >
              <button className="btn btn-primary" style={{ textAlign: "center", width: "20%", float: "left" }} >Continue Booking</button>
            </Link> 
            <button className="btn btn-danger" style={{ textAlign: "center", width: "20%", float: "right" }} >Cancel</button><br /><br />
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}