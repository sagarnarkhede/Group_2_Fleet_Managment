import React, { Component } from 'react'
import Nav from './Nav'

export default class BookCar extends Component {
    constructor(props) {
        super(props);
        this.state = { pickupDate: '' };
        this.state = { dropDate: '' };
        this.state = { pickupTime: '' };
        this.state = { dropTime: '' };
        this.state = { serachAirport: '' };
        this.state = { selectAirport: '' };
        this.state = { city: '' };
        this.state = { state: '' };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.pickupDate);
      }
      myChangeHandler = (event) => {
        this.setState({pickupDate: event.target.pickupDate});
        this.setState({dropDate: event.target.value});
        this.setState({pickupTime: event.target.value});
        this.setState({dropTime: event.target.value});
        this.setState({serachAirport: event.target.value});
        this.setState({selectAirport: event.target.value});
        this.setState({city: event.target.value});
        this.setState({state: event.target.value});
        console.log(this.state.pickupDate);
      }
  
     drop(params) {
         let value = document.getElementById('returncheck')
         if(value)
         {
         return(
            <div className="row mt-2">
            <label>Select Drop Up Location : </label>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <label className="sublabel">Search AirPort : </label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col-6">
                        <label className="sublabel">Select AirPort : </label>
                        <input type="text" className="form-control"></input>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <label className="sublabel">City : </label>
                        <input type="text" className="form-control  "></input>
                    </div>
                    <div className="col-6">
                        <label className="sublabel">State : </label>
                        <input type="text" className="form-control col-3"></input>
                    </div>
                </div>

            </div>
            
        </div>

         )
         }
         else{
             return;
         }
        
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="" style={{ margin: "18vh 25%", border: "2px solid black", padding: "50px", borderRadius: "30px" }}>
                    <form className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <label >Select Pickup Date : </label>
                                <input type="date" className="form-control" name="pickupDate" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Select Pickup Date : </label>
                                <input type="date" className="form-control" name="dropDate" onChange={this.myChangeHandler} ></input>
                            </div>

                        </div><br />
                        <div className="row mt-2">
                            <div className="col-6">
                                <label>Select Pickup Time : </label>
                                <input type="time" className="form-control" name="pickupTime" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Select Pickup Time : </label>
                                <input type="time" className="form-control" name="dropTime" onChange={this.myChangeHandler}></input>
                            </div>
                        </div><br />
                        <div className="row mt-2">
                            <label>Select Pick Up Location : </label>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <label className="sublabel">Search AirPort : </label>
                                        <input type="text" className="form-control" name="serachAirport" onChange={this.myChangeHandler}></input>
                                    </div>
                                    <div className="col-6">
                                        <label className="sublabel">Select AirPort : </label>
                                        <input type="text" className="form-control" name="selectAirport" onChange={this.myChangeHandler}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <label className="sublabel">City : </label>
                                        <input type="text" className="form-control" name="city" onChange={this.myChangeHandler}></input>
                                    </div>
                                    <div className="col-6">
                                        <label className="sublabel">State : </label>
                                        <input type="text" className="form-control col-3" name="state" onChange={this.myChangeHandler}></input>
                                    </div>
                                </div>

                            </div>

                        </div><br />
                        <label style={{ fontSize: "16px" }}>I May Return Car to Other Location : </label><br />
                        <input id="returncheck" type="checkbox" value="" name="" onChange={this.myChangeHandler}></input><br />
                        {this.drop()}
                        <br />
                        <button className="btn btn-primary" style={{ textAlign: "center" }}>Continue Booking</button>











                    </form>





                </div>






            </div>
        )
    }
}
