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

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.get("http://localhost:5555/clients")
            .then(async response => {
                const client_arr = response.data.data;
                for (var x = 0; x < client_arr.length; x++) {

                    if (client_arr[x]._id == this.state.userid && client_arr[x].password == this.state.password) {
                        console.log("clients SignIn sucessfully...");
                    }
                }
                
            })
            .catch(error => {
                console.log(error);
            })

            // office login
            axios.get("http://localhost:5555/office")
            .then(async response => {
                const office_arr = response.data.data;
               // console.log(office_arr);
                for (var x = 0; x < office_arr.length; x++) {

                    if (office_arr[x]._id == this.state.userid && office_arr[x].password == this.state.password) {
                        console.log("Office staff SignIn sucessfully...");
                    }
                }
                
            })
            .catch(error => {
                console.log(error);
            })
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
