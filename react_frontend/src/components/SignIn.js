import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { ModalBody } from 'react-bootstrap';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid : '',
            password: '',
        }
    }
    mySubmitHandler = async (event) => {
        let flag = 0;
        event.preventDefault();
        console.log(this.state);
        await axios.get("http://localhost:5555/clients/"+this.state.userid)
            .then(async response => {
                const client_arr = response.data.data;
                    if (client_arr._id == this.state.userid && client_arr.password == this.state.password) {
                        console.log("clients SignIn sucessfully...");
                        sessionStorage.setItem("user",this.state.userid)
                    }
                    else{
                        console.log("invalid Login details...");
                    }                
            })
            .catch(error => {
                flag = 1;
                console.log(error);
            })

            // office login
            if(flag == 1)
            {
            axios.get("http://localhost:5555/office/"+this.state.userid)
            .then(async response => {
                const office_arr = response.data.data;
                    if (office_arr._id == this.state.userid && office_arr.password == this.state.password) {
                        console.log("Office staff SignIn sucessfully...");
                    }                
            })
            .catch(error => {
                console.log(error);
            })}
    }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="" style={{ margin: "13vh 15%" }}>
                    <h2>Login : </h2><br />
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                        <label >UserId : </label>
                        <input type="text" className="form-control" name="userid" onChange={this.myChangeHandler}></input>

                        <label>password : </label>
                        <input type="text" className="form-control" name="password" onChange={this.myChangeHandler} ></input>
                        <br />
                        <br />
                        <button className="btn btn-primary" style={{ textAlign: "center", width: "20%" }}>Sign In</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }}>Sign Up</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignIn;
