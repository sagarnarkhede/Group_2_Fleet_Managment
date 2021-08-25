
import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {Switch,Route,Link} from "react-router-dom";


 
export default class Location extends Component {
    constructor(props) {
        super(props);
        console.log("location",this.props);
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
                    <h2>Select Pickup/Return Location :</h2><br/>
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{border: "2px solid black",borderRadius: "30px",  padding: "50px"}}>
                     
                            <h5 className = "loactiontitle"> Your Loaction have matches 3 location, please select one</h5>
                     <div  className="row">
                     <div className="col-6">
                            <div className="card"  style = {{width: "40rem"}}>
                            
                            <div className="card-body">
                            <h2>Brdford Civil Air Terminial Hanscom Field-BED</h2>
                            <p>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <p class="form-check-label" for="flexRadioDefault1">
                              200 Hanscom Drive, Bedford, MA 01730, USA  <br/>
                              (1) 781-274-7488 <br/>
                              Sun 03:00 PM - 06:00 PM; Mon-Fri 8:00 PM - 06:00 PM   <br/>   
                              sat 09:30AM - 03:00PM                    </p>
                          </div></p>
                            
                            </div>      
                        </div>

                        <div className="card"  style = {{width: "40rem"}}>
                            
                        <div className="card-body">
                        <h2>Brdford Civil Air Terminial Hanscom Field-BED</h2>
                        <p>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <p class="form-check-label" for="flexRadioDefault1">
                          200 Hanscom Drive, Bedford, MA 01730, USA  <br/>
                          (1) 781-274-7488 <br/>
                          Sun 03:00 PM - 06:00 PM; Mon-Fri 8:00 PM - 06:00 PM   <br/>   
                          sat 09:30AM - 03:00PM                    </p>
                      </div></p>
                        
                        </div>
      
                    </div>


                    <div className="card"  style = {{width: "40rem"}}>
                            
                    <div className="card-body">
                    <h2>Brdford Civil Air Terminial Hanscom Field-BED</h2>
                    <p>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <p class="form-check-label" for="flexRadioDefault1">
                      200 Hanscom Drive, Bedford, MA 01730, USA  <br/>
                      (1) 781-274-7488 <br/>
                      Sun 03:00 PM - 06:00 PM; Mon-Fri 8:00 PM - 06:00 PM   <br/>   
                      sat 09:30AM - 03:00PM                    </p>
                  </div></p>
                    
                    </div>

                     
                </div>
                </div>
                     </div> <br/><br/>
                     <Link to={{ pathname: "/cardetail",state:this.state}} >
                     <button className="btn btn-primary" style={{ textAlign: "center", width:"20%", float: "left"}}>Continue Booking</button>
                     </Link>
                     <button className="btn btn-danger" style={{ textAlign: "center", width:"20%", float: "right"}}>Cancel</button><br/><br/>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}