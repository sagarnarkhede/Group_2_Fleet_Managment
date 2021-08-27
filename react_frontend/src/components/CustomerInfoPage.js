import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
class CustomerInfoPage extends Component {
    constructor(props) {
        super(props);
        console.log("customer info ",this.props);
        this.state = {
            fname: '',
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
            zip: '',
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
            membershipno: '',
            loginpassword: ''

        }
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    myLoginHandler = async (event) => {
        event.preventDefault();
        axios.get('http://localhost:5555/clients/'+this.state.membershipno)
        .then((res)=>{     
            let ele = res.data.data  
            if(ele._id == this.state.membershipno && ele.password == this.state.loginpassword){
                    for(let x in this.state){
                        for(let y in ele){
                            if(x == y){
                                this.setState({
                                    [x]:ele[y]
                                })
                            }
                        }
                    }
            }
            else{
                alert("invalid Id pass")
            }
    }).catch((e)=>{
        alert("invalid Id pass")
        console.log("e",e.message);
    })
    }
    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    getLogin() {
        return (
            <React.Fragment>
                <form className="form-group" onSubmit={this.myLoginHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                    <label >Membership No : </label>
                    <input type="text" className="form-control" name="membershipno" onChange={this.myChangeHandler}></input>
                    <label>password : </label>
                    <input type="text" className="form-control" name="loginpassword" onChange={this.myChangeHandler} ></input>
                    <br />
                    {/* <p>Forget Password</p>
                    <br /> */}

                    <button className="btn btn-primary" style={{ textAlign: "center" }}>Log In</button>
                    {/* <button className="btn btn-primary" style={{ textAlign: "center", float:"right" }}>Sign Up</button> */}
                </form>
                <br />
                {/* <br/> */}
            </React.Fragment>

        )
    }
    getBookingDetails() {
        return (
            <div style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                <label>Your Booking : </label>
                <br/>
                <br/>
                <p>Pick-up:Modify</p>
                    <p>{this.props.location.state.pickupDate} {this.props.location.state.pickupTime}</p>
                <p>Pick-up at:Modify</p>
                    <p>{this.props.location.state.pickupDate} {this.props.location.state.pickupTime}</p>
                <p>Reture:Modify</p>
                    <p>{this.props.location.state.pickupDate} {this.props.location.state.pickupTime}</p>
                <p>Return at:Modify</p>
                    <p>{this.props.location.state.pickupDate} {this.props.location.state.pickupTime}</p>
                <p>Vehicle Selection:Modify</p>
                    <p>{this.props.location.state.pickupDate} </p>
                <p>Rental Ad-Ons: Modify</p>
                    <p>{this.props.location.state.pickupDate}</p>
                
            </div>
        )
    }
    getForm() {
        return (
            <React.Fragment>
                <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                    <div className="row">
                        <div className="col-6">
                            <label >First Name : </label>
                            <input type="text" className="form-control" name="fname" defaultValue={this.state.fname} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Last Name : </label>
                            <input type="text" className="form-control" name="lname" defaultValue={this.state.lname} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />
                    <label>Address 1 : </label>
                    <input type="text" className="form-control" name="address1" defaultValue={this.state.address1} onChange={this.myChangeHandler} ></input>
                    <br />
                    <label>Address 2: </label>
                    <input type="text" className="form-control" name="address2" defaultValue={this.state.address2} onChange={this.myChangeHandler} ></input>
                    <br />

                    <div className="row">
                        <div className="col-6">
                            <label >Email : </label>
                            <input type="text" className="form-control" name="email" defaultValue={this.state.email} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>password : </label>
                            <input type="text" className="form-control" name="password" defaultValue={this.state.password} onChange={this.myChangeHandler} ></input>
                        </div>

                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Phone Number : </label>
                            <input type="text" className="form-control" name="phone_number" defaultValue={this.state.phone_number} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Cell : </label>
                            <input type="text" className="form-control" name="mobile_number" defaultValue={this.state.mobile_number} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label>Date of Birth : </label>
                            <input type="date" className="form-control" name="date_of_birth" defaultValue={this.state.date_of_birth} onChange={this.myChangeHandler} ></input>
                        </div>
                        <div className="col-6">
                            <label>Zip Code : </label>
                            <input type="number" className="form-control" name="zip" defaultValue={this.state.zip} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >City : </label>
                            <input type="text" className="form-control" name="city" defaultValue={this.state.city} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>State : </label>
                            <input type="text" className="form-control" name="state" defaultValue={this.state.state} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Card Type : </label>
                            <input type="text" className="form-control" name="card_type" defaultValue={this.state.card_type} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Card Number : </label>
                            <input type="text" className="form-control" name="card_number" defaultValue={this.state.card_number} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Local Driving Lic : </label>
                            <input type="text" className="form-control" name="driving_lic" defaultValue={this.state.driving_lic} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>IDP# : </label>
                            <input type="text" className="form-control" name="IDP" defaultValue={this.state.IDP} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Issuer By : </label>
                            <input type="text" className="form-control" name="driving_issued_by" defaultValue={this.state.driving_issued_by} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Valid Upto : </label>
                            <input type="date" className="form-control" name="driving_valid" defaultValue={this.state.driving_valid} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Passport No : </label>
                            <input type="text" className="form-control" name="passport_number" defaultValue={this.state.passport_number} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Valid Upto : </label>
                            <input type="date" className="form-control" name="passport_valid" defaultValue={this.state.passport_valid} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col-6">
                            <label >Issued By : </label>
                            <input type="text" className="form-control" name="passport_issued_by" defaultValue={this.state.passport_issued_by} onChange={this.myChangeHandler}></input>
                        </div>
                        <div className="col-6">
                            <label>Date : </label>
                            <input type="date" className="form-control" name="passport_date" defaultValue={this.state.passport_date} onChange={this.myChangeHandler} ></input>
                        </div>
                    </div><br />


                    <button className="btn btn-primary" style={{ textAlign: "center", width: "20%" }}>Register</button>
                    <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }}>Cancel</button>
                </form>
            </React.Fragment>
        )
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="" style={{ margin: "13vh 5%" }}>
                    <h2>Register Yourself : </h2><br />
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12">
                                    {this.getLogin()}
                                </div>
                                <div className="col-12">
                                    {this.getBookingDetails()}
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            {this.getForm()}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CustomerInfoPage;