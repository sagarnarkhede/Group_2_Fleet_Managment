import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {Switch,Route,Link} from "react-router-dom";

export default class componentName extends Component {
     constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this)
        this.state = { 
        fname: '' ,
        lname: '',
        email: '',
        date_of_birth: '',
        password: '',
        phone_number: '',
        mobile_number: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip : '',
        card_type: '',
        card_number: '',
        driving_lic: '',
        IDP: '',
        driving_issued_by: '',
        driving_valid: '',
        passport_number: '',
        passport_valid: '',
        passport_issued_by: '',
        passport_date: '',
       
    }
      }

      handleBack() {
        this.props.history.goBack()
     }
      mySubmitHandler = (event) => {
          let ob =localStorage.getItem("data")
          console.log(JSON.parse(ob));
          
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
                                <label>password : </label>
                                <input type="text" className="form-control" name="password" onChange={this.myChangeHandler} ></input>
                            </div>
                           
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Phone Number : </label>
                                <input type="text" className="form-control" name="phone_number" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Cell : </label>
                                <input type="text" className="form-control" name="mobile_number" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                        <div className="col-6">
                                <label>Date of Birth : </label>
                                <input type="date" className="form-control" name="date_of_birth" onChange={this.myChangeHandler} ></input>
                            </div>
                            <div className="col-6">
                                <label>Zip Code : </label>
                                <input type="number" className="form-control" name="zip" onChange={this.myChangeHandler} ></input>
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
                                <input type="text" className="form-control" name="card_type" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Card Number : </label>
                                <input type="text" className="form-control" name="card_number" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Local Driving Lic : </label>
                                <input type="text" className="form-control" name="driving_lic" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>IDP# : </label>
                                <input type="text" className="form-control" name="IDP" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Issuer By : </label>
                                <input type="text" className="form-control" name="driving_issued_by" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Valid Upto : </label>
                                <input type="date" className="form-control" name="driving_valid" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Passport No : </label>
                                <input type="text" className="form-control" name="passport_number" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Valid Upto : </label>
                                <input type="date" className="form-control" name="passport_valid" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <div className="row">
                            <div className="col-6">
                                <label >Issued By : </label>
                                <input type="text" className="form-control" name="passport_issued_by" onChange={this.myChangeHandler}></input>
                            </div>
                            <div className="col-6">
                                <label>Date : </label>
                                <input type="date" className="form-control" name="passport_date" onChange={this.myChangeHandler} ></input>
                            </div>
                        </div><br />

                        <Link to={{ pathname: "/",state:this.state}} >
                        <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Register</button>
                        </Link>
                        <button className="btn btn-primary" style={{ textAlign: "center", float:"right" ,width:"20%"}} onClick={this.handleBack}>Back</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
