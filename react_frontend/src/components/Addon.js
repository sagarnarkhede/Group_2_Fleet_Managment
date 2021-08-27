import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import {Switch,Route,Link} from "react-router-dom";

class Addon extends Component {
    constructor(props) {
        super(props);
        console.log("addon",this.props);
        this.state = { 
       nav:"",
       camp:"",
       chSeats:""
    }
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
      }
      myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value });
        // console.log(this.state);
      }
  
  
    render() {
        return (
            <div>
                <Nav />
                <div className="" style={{ margin: "13vh 15%" }}>
                    <h2>Rental Add-ons : </h2><br/>
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{border: "2px solid black",borderRadius: "30px",  padding: "50px"}}>
                                {/* <label >Email : </label>
                                <input type="text" className="form-control" name="email" onChange={this.myChangeHandler}></input>
                                
                                <label>password : </label>
                                <input type="text" className="form-control" name="password" onChange={this.myChangeHandler} ></input> */}
                                
                                <input type="checkbox" id="1" name="nav" value="B" onClick={ async() => { await this.setState({nav:"GPS Navigation System"}); console.log(this.state)}}></input>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <label for="1"> GPS Navigation System&nbsp;&nbsp; <span>&#36;10.00 /day</span></label><br></br>
                                <input type="checkbox" id="1" name="camp" value="B" onClick={ async() => { await this.setState({camp:"Camping Kit"}); console.log(this.state)}}></input>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <label for="1"> Camping Kit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>&#36;30.00 /day</span></label><br></br>
                                <input type="checkbox" id="1" name="chSeats" value="B" onClick={ async() => { await this.setState({chSeats:"Child Seats"}); console.log(this.state)}}></input>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <label for="1"> Child Seats &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>&#36;2.00 /day(For additonal seat 1 seat free )</span></label><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <h6>Please enter no. of seats</h6>
                        <br/>
                        <br/>
                        <Link to={{ pathname: "/CustomerInfoPage",state:this.state}} >
                                <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Continue Booking</button>
                                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Cancel</button>
                                
                        {/* <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Sign In</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float:"right" ,width:"20%"}}>Sign Up</button> */}
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Addon;