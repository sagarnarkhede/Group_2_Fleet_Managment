import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import axios from "./Axios/Axios";
import { Switch, Route, Link } from "react-router-dom";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this)
    console.log("location", this.props);
   this.getStates();
  }
  getStates()
  {
    if(this.props.location.state.url == "custemerinfo")
    {
      var data = this.props.location.state.data?.cardetailsState?.locationState
      return(
        this.state = {
          bookingState:data.bookingState,
          address: [data.selectaddress],
          selectaddress: data.selectaddress,
          dropaddress: [data.selectdropaddress],
          selectdropaddress: data.selectdropaddress,
          check:"",
                
        }
      )
    }
    else{
      return( 
        this.state = {
        bookingState:this.props.location.state,
        address: [],
        selectaddress: {}, 
        dropaddress:[],
        selectdropaddress: {},
        check:this.props.location.state.returncheck       
      })
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
    if(this.props.location?.state.url == "custemerinfo"){
      var add = [];
      var add1 = [];
      axios.get("http://localhost:5555/centers/")
          .then(async response => {
          const Locations = response.data.data;
          Locations.forEach(async(ele)=>{
            if(ele.centername == this.state.address[0].centername){
              Locations.forEach(async(ele1)=>{
                // console.log("cc",this.state.address[0].city);
                if(ele.city == ele1.city){
                  await add.push(ele1)
                  this.setState({address:add})
                }
              })
            }
          })
          Locations.forEach(async(ele)=>{
            // console.log("qq",ele.centername);
            if(ele.centername == this.state.dropaddress[0]?.centername){
              
              Locations.forEach(async(ele1)=>{
                // console.log("cc",this.state.dropaddress[0].city);
                if(ele.city == ele1.city){
                  await add1.push(ele1)
                  this.setState({dropaddress:add1})
                }
              })
            }
          })
         
          // console.log("asw",this.state);
          })
          .catch(error => {
            console.log(error.message);
          })
          // console.log("asw",add);
    }
        
    // }
    else{
    if(this.props.location.state.searchpickupAirport != ""){
      try {
        var a = this.props.location.state.airportdata;      //database data
        var b = this.props.location.state.searchpickupAirport;  //user selected location 
        var c = this.props.location.state.searchdropAirport; 
        var add = [];
        var dropadd = [];
      } catch (error) {
        console.log(error);
      }
    // console.log("Array", typeof b);
    for (var x = 0; x < a?.length; x++) {
      if (a[x].airportname.toLowerCase() == b.toLowerCase()) {
        // console.log("nearest Center Array :", a[x].nearestcenter.length);
        for (var y = 0; y < a[x].nearestcenter?.length; y++) {
          var p = a[x].nearestcenter[y];
          // console.log(p);
          axios.get("http://localhost:5555/centers/"+p)
            .then(async response => {
            const Locations = response.data.data;
              // this.setState({address:Locations});
              await add.push(Locations)
              this.setState({address:add})
              // console.log("add",this.state);
            })
            .catch(error => {
              console.log(error.message);
            })
        }
      }
    }
    for (var x = 0; x < a?.length; x++) {
      if (a[x].airportname.toLowerCase() == c.toLowerCase()) {
        // console.log("nearest Center Array :", a[x].nearestcenter.length);
        for (var y = 0; y < a[x].nearestcenter?.length; y++) {
          var p = a[x].nearestcenter[y];
          // console.log(p);
          axios.get("http://localhost:5555/centers/"+p)
            .then(async response => {
            const Locations = response.data.data;
              // this.setState({address:Locations});
              await dropadd.push(Locations)
              this.setState({dropaddress:dropadd})
              // console.log("add",this.state);
            })
            .catch(error => {
              console.log(error.message);
            })
        }
      }
    }
  }
  else{
    try {
      var a = this.props.location.state.pickupcity;      //database data
      //var b = this.props.location.state.searchpickupAirport;  //user selected location
      var add = [];
    } catch (error) {
      console.log(error);
    }
    axios.get("http://localhost:5555/centers/")
          .then(async response => {
          const Locations = response.data.data;
          //console.log("add",Locations);
          Locations.forEach(async(ele)=>{
            if(ele.city.toLowerCase() == a.toLowerCase()){
              await add.push(ele)
              this.setState({address:add})
              console.log("add",add);
            }
          })
         
          })
          .catch(error => {
            console.log(error.message);
          })
  }
  }}
 handleSelect =async (data) => {
   await this.setState({
    selectaddress: data
   })
  //  console.log("selet",this.state.selectaddress )
 }
 handleSelect1 =async (data) => {
  await this.setState({
   selectdropaddress: data
  })
}

 getcontinewbtn(){
  if(this.props.location?.state.url == "custemerinfo")
  {
      var updatedData = this.props.location?.state.data;
      updatedData.cardetailsState.locationState = this.state;
      // console.log("updatedData",this.state.selectdropaddress.centername);
      if((this.state.check != "checked") && (this.state.selectdropaddress?.centername != undefined))
      {
        this.setState({check:"checked"})
      }
     
      //this.setState({selectaddress:updatedData.cardetailsState.locationState.selectaddress});
      //this.props.location.state.data?.cardetailsState?.locationState.bookingState
      return(
      <Link to={{ pathname: "/CustomerInfoPage", state: updatedData }} >
          <button className="btn btn-primary" style={{ textAlign: "center" }}>Continue Booking</button>
      </Link>
      )
  }
  else{
  return(
      <Link to={{ pathname: "/cardetail", state: this.state }} >
          <button className="btn btn-primary" style={{ textAlign: "center" }}>Continue Booking</button>
      </Link>)
}
}
  render() {
    //console.log("x",this.props.location.state.returncheck);
    if(this.state.check != "checked"){
      console.log(this.props.location.state.returncheck)
      return(
        <div>
        <Nav />
        <div className="" style={{ margin: "13vh 15%" }}>
          <h2>Select Pickup:</h2><br />
          <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
            <h5 className="loactiontitle"> Your Loaction have matches {this.state.address?.length} location, please select one</h5>
            <div className="row">
        <div className="col-6">
                {this.state.address?.map((u) => (
                  <div>
                    <div className="card" style={{ width: "30rem" }}>
                      <div className="card-body">
                        <p>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"   key={u._id} onClick={() => this.handleSelect(u)}/>
                            <p class="form-check-label" for="flexRadioDefault1">
                              <h2>{u.centername} </h2>
                              Address:{u.address},{u.city},{u.state}<br/>
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
              {this.getcontinewbtn()}
              <button className="btn btn-primary" style={{ textAlign: "center", width: "20%", float: "right" }} onClick={this.handleBack} >Back</button><br /><br />
            </form>
          </div>
          <Footer />
        </div>
      )
    }
    else{
    return (
      <div>
        <Nav />
        <div className="" style={{ margin: "13vh 15%" }}>
          <h2>Select Pickup/Return Location :</h2><br />
          <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
            {/* <h5 className="loactiontitle"> Your Loaction have matches {this.state.address.length} location, please select one</h5> */}
            <div className="row">
              <div className="col-6">
              <h5 className="loactiontitle"> Your Pickup Loaction have matches {this.state.address?.length} location, please select one</h5>

                {this.state.address.map((u) => (
                  <div>
                    <div className="card" style={{ width: "30rem" }}>
                      <div className="card-body">
                        <p>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"   key={u._id} onClick={() => this.handleSelect(u)}/>
                            <p class="form-check-label" for="flexRadioDefault1">
                              <h2>{u.centername} </h2>
                              Address:{u.address},{u.city},{u.state}<br/>
                              Contact No:  {u.telphone}<br />
                              Office Time: {u.officetime}<br />
                              Weekly Off:  {u.weeklyoff}</p>
                          </div></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> 
              <div className="col-6">
              <h5 className="loactiontitle"> Your Drop Loaction have matches {this.state.dropaddress?.length} location, please select one</h5>

              {this.state.dropaddress.map((u) => (
                  <div>
                    <div className="card" style={{ width: "30rem" }}>
                      <div className="card-body">
                        <p>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="RadioDefault" id="flexRadioDefault1"   key={u._id} onClick={() => this.handleSelect1(u)}/>
                            <p class="form-check-label" for="flexRadioDefault1">
                              <h2>{u.centername} </h2>
                              Address:{u.address},{u.city},{u.state}<br/>
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
            {this.getcontinewbtn()}
            <button className="btn btn-primary" style={{ textAlign: "center", width: "20%", float: "right" }} onClick={this.handleBack} >Back</button><br /><br />
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}
}