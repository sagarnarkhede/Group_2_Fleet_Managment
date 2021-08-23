import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default class BookCar extends Component {
    constructor(props) {
        super(props);
        this.state = { pickupDate: '' ,
        dropDate: '',
        pickupTime: '',
        dropTime: '',
        searchpickupAirport: '',
        selectpickupAirport: '',
        pickupcity: '',
        pickupstate: '',
        returncheck : '',
        searchdropAirport: '',
        selecdroppAirport: '',
        dropcity: '',
        dropstate: '',
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
  
     drop(params) {
         if(this.state.returncheck)
         {
         return(
            <div className="row mt-2">
            <label>Select Drop Up Location : </label>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <label className="sublabel">Search AirPort : </label>
                        <input type="text" className="form-control" name="searchdropAirport" onChange={this.myChangeHandler}></input>
                    </div>
                    <div className="col-6">
                        <label className="sublabel">Select AirPort : </label>
                        <select className="form-control" name="selecdroppAirport" onChange={this.myChangeHandler}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        {/* <input type="text" className="form-control" name="selecdroppAirport" onChange={this.myChangeHandler} ></input> */}
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <label className="sublabel">City : </label>
                        <input type="text" className="form-control" name="dropcity" onChange={this.myChangeHandler}></input>
                    </div>
                    <div className="col-6">
                        <label className="sublabel">State : </label>
                        <input type="text" className="form-control col-3" name="dropstate" onChange={this.myChangeHandler}></input>
                    </div>
                </div>

            </div>
            
        </div>
         )
         }
         else{
             return(
                 <div></div>
             )
         }
        
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="" style={{ margin: "13vh 15%", border: "2px solid black", padding: "50px", borderRadius: "30px",maxHeight:"100vh" }}>
                    <form className="form-group" onSubmit={this.mySubmitHandler}>
                        <div className="row">
                            <div className="col-6">
                                <label >Select Pickup Date : </label>
                                <input type="date" className="form-control" name="pickupDate" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Select Drop Date : </label>
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
                                        <input type="text" className="form-control" name="searchpickupAirport" onChange={this.myChangeHandler}></input>
                                    </div>
                                    <div className="col-6">
                                        <label className="sublabel">Select AirPort : </label>
                                        <select className="form-control" name="selectpickupAirport" onChange={this.myChangeHandler}>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        {/* <input type="text" className="form-control" name="selectpickupAirport" onChange={this.myChangeHandler}></input> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <label className="sublabel">City : </label>
                                        <input type="text" className="form-control" name="pickupcity" onChange={this.myChangeHandler}></input>
                                    </div>
                                    <div className="col-6">
                                        <label className="sublabel">State : </label>
                                        <input type="text" className="form-control col-3" name="pickupstate" onChange={this.myChangeHandler}></input>
                                    </div>
                                </div>

                            </div>

                        </div><br />
                        <label style={{ fontSize: "16px" }}>I May Return Car to Other Location : </label><br />
                        <input id="returncheck" type="checkbox" value="checked" name="returncheck" onChange={this.myChangeHandler}></input><br />
                        {this.drop()}
                        <br />
                        <button className="btn btn-primary" style={{ textAlign: "center" }}>Continue Booking</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
