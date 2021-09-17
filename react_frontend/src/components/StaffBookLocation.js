import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import axios from "./Axios/Axios";
import { Switch, Route, Link } from "react-router-dom";

export default class StaffBookLocation extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this)
    console.log("location", this.props.location.state);
    this.state = {
      bookingState:this.props.location.state,
      address: [],
      selectaddress: [],       
    }
  }
  handleBack() {
    this.props.history.goBack()
 }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  myChangeHandler = (event) => {
  
  }

  componentDidMount() {
    var staffid = sessionStorage.getItem("staff")
    var staffcenter = "";
    axios.get("http://localhost:5555/office/"+staffid)
        .then(async response => {
            staffcenter = response.data.data.centername;
            console.log(staffcenter);        
        var url = "http://localhost:5555/centers/"+staffcenter;
        console.log(url);
        axios.get(url)
        .then(async response => {
        const Locations = response.data.data;
          // this.setState({address:Locations});
          //await add.push(Locations)
          console.log("Locations",Locations);
          this.setState({address:[Locations]})
          // console.log("add",this.state);
        })
        .catch(error => {
          console.log(error.message);
        })
      })
      .catch(error => {
          console.log(error);
      })
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
            <button className="btn btn-primary" style={{ textAlign: "center", width: "20%", float: "right" }} onClick={this.handleBack} >Back</button><br /><br />
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}