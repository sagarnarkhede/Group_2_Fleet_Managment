import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        email: '',
        password: '',
       
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
                    <h2>Login : </h2><br/>
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{border: "2px solid black",borderRadius: "30px",  padding: "50px"}}>
                                <label >Email : </label>
                                <input type="text" className="form-control" name="email" onChange={this.myChangeHandler}></input>
                           
                                <label>password : </label>
                                <input type="text" className="form-control" name="password" onChange={this.myChangeHandler} ></input>
                        <br/>
                        <br/>
                        <button className="btn btn-primary" style={{ textAlign: "center", width:"20%"}}>Sign In</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float:"right" ,width:"20%"}}>Sign Up</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignIn;
