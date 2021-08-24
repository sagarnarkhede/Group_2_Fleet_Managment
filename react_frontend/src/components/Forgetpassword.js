
import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: ''
       
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
                    <h2>Enter your new password below : </h2><br/>
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{border: "2px solid black",borderRadius: "30px",  padding: "50px"}}>
                        <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">                                <label >New Password : </label>
                                <input type="password" className="form-control" name="email" onChange={this.myChangeHandler}></input></div>    
                                
                            </div>
                            <div className="col-3"></div>
                           
                        <br />
                        <div className="row">
                    
                        <div className="col-3"></div>
                        <div className="col-6">                                <label >Confirm NewPassword : </label>
                                <input type="password" className="form-control" name="password" onChange={this.myChangeHandler}></input> 
                                
                            </div>
                            <div className="col-3"></div>
                            </div>   
                            
                        <br/>
                        <div className="row">
                        <div className="col-5"></div>
                        <div className="col-5">   
                        <div class="col-sm-offset-2 col-sm-10">
                                    <div class="checkbox">
                                        {/* <label><input type="checkbox"/> Keep Signed In</label> */}
                                    </div></div>  <br/>                           
                        <button className="btn btn-danger" style={{ textAlign: "center", width:"40%"}}>Reset Password</button>
                        <br/> <br/>
                        <div class="col-sm-offset-2 col-sm-10">
                                    <div  >
                                    {/* <a href="#">Forgot Your password ?</a> */}
                                    <p>Hint: The password should be atleast twelve chaaracters long</p>
                                    </div></div> 


                        </div>    
                                
                            
                            <div className="col-2"></div>
                            </div>
                        
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}