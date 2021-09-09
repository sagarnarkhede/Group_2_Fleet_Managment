import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import {Switch, Route, Link} from "react-router-dom";


class Addon extends Component {

   
    constructor(props) {
        super(props);
        console.log("addon",this.props);
       this.handleBack = this.handleBack.bind(this)
        this.state = { 
           cardetailsState:this.props.location.state,
       nav:"",
       camp:"",
       chSeats:"",
       quant:2
    }
      }
      handleClick = (prevState) => {
         // this.setState({}, () => {
         //     console.log(this.state.quant)
         // });
       }
      


      handleBack() {
         this.props.history.goBack()
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
                               
                                    <div class="container">
                                    <div class="row">
                                     <div class="col">
                                     <input type="checkbox" id="1" name="nav" value="B" onClick={ async() => { await this.setState({nav:"GPS Navigation System"}); console.log(this.state)}}></input> <label for="1"> GPS Navigation System</label>
                                        </div>
                                     <div class="col-8">
                                     &#36;10.00 /day
                                        </div>
                                       </div>
                                       <div class="row">
                                     <div class="col">
                                     <input type="checkbox" id="1" name="camp" value="B" onClick={ async() => { await this.setState({camp:"Camping Kit"}); console.log(this.state)}}></input> <label for="1"> Camping Kit</label>
                                        </div>
                                     <div class="col-8">
                                     &#36;30.00 /day
                                        </div>
                                       </div>
                                       <div class="row">
                                     <div class="col">
                                     <input type="checkbox" id="1" name="chSeats" value="B" onClick={ async() => { await this.setState({chSeats:"Child Seats"}); console.log(this.state)}}></input> <label for="1"> Child Seats</label>
                                        </div>
                                     <div class="col-8">
                                     &#36;15.00 /day
                                        </div>
                                       </div>
                                       <div class="row">
                                     <div class="col">
                                     <label>Please enter no. of seats </label>
                                        </div>
                                     <div class="col-8">
                                     
                                     <label for="quantity"></label><input type="number" id="quantity" name="quant"   min="1" max="4"  onClick= {this.handleClick} ></input>
                                     
                                        </div>
                                       </div>
                                       </div>
                                
                                   
                        <br/>
                        <br/>
                        <Link to={{ pathname: "/CustomerInfoPage",state:this.state}} >
                                <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Continue Booking</button>
                                <button className="btn btn-primary" style={{  textAlign: "center", float: "right", width: "20%"}} onClick={this.handleBack} >Back</button>
                                </Link>
                                
                                
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