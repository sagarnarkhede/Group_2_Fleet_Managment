import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        fname: '' ,
        lname: '',
        address1: '',
        address2: '',
        email: '',
        dateOfBirth: '',
        city: '',
        state: '',
        zip : '',
        phoneNumber: '',
        mobileNumber: '',
        cardType: '',
        cardNumber: '',
        dLic: '',
        IDP: '',
        DissuedBY: '',
        Dvalid: '',
        Pnumber: '',
        Pvalid: '',
        PissuedBy: '',
        Pdate: '',
       
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
                    <h2>Register Yourself : </h2><br/>
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{border: "2px solid black",borderRadius: "30px",  padding: "50px"}}>
                        <div className="row">
                            <div className="col-6">
                                <label >First Name : </label>
                                <input type="text" className="form-control" name="fname" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Last Name : </label>
                                <input type="text" className="form-control" name="lname" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />
                        <label>Address 1 : </label>
                                <input type="text" className="form-control" name="address1" onChange={this.myChangeHandler} ></input>
                            <br/>
                            <label>Address 2: </label>
                                <input type="text" className="form-control" name="address2" onChange={this.myChangeHandler} ></input>
                            <br/>

                            <div className="row">
                            <div className="col-6">
                                <label >Email : </label>
                                <input type="text" className="form-control" name="email" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Date of Birth : </label>
                                <input type="date" className="form-control" name="dateOfBirth" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Phone Number : </label>
                                <input type="text" className="form-control" name="phoneNumber" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Cell : </label>
                                <input type="text" className="form-control" name="mobileNumber" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >City : </label>
                                <input type="text" className="form-control" name="city" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>State : </label>
                                <input type="text" className="form-control" name="state" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Card Type : </label>
                                <input type="text" className="form-control" name="cardType" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Card Number : </label>
                                <input type="text" className="form-control" name="cardNumber" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Local Driving Lic : </label>
                                <input type="text" className="form-control" name="dLic" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>IDP# : </label>
                                <input type="text" className="form-control" name="IDP" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Issuer By : </label>
                                <input type="text" className="form-control" name="DissuedBY" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Valid Upto : </label>
                                <input type="date" className="form-control" name="Dvalid" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Passport No : </label>
                                <input type="text" className="form-control" name="Pnumber" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Valid Upto : </label>
                                <input type="date" className="form-control" name="Pvalid" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Issued By : </label>
                                <input type="text" className="form-control" name="PissuedBy" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Date : </label>
                                <input type="date" className="form-control" name="Pdate" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />


                        <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Register</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float:"right" ,width:"20%"}}>Cancel</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
