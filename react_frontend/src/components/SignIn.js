import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';
import InvalidIdPass from './Modal/InvalidIdPass';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid : '',
            password: '',
            invalidpassmodalShow: false
            
        }
    }
    
   
    mySubmitHandler = async (event) => {
        let flag = 0;
        event.preventDefault();
        console.log(this.state);
        await axios.get("http://localhost:5555/clients/"+this.state.userid)
            .then(async response => {
                const client_arr = response.data.data;
                    if (client_arr._id === this.state.userid && client_arr.password === this.state.password) {
                        console.log("clients SignIn sucessfully...");
                        sessionStorage.setItem("user",this.state.userid)
                        this.props.history.push("/")
                    }
                    else{
                        this.setState({ invalidpassmodalShow:true})
                        console.log("invalid Login details...");
                    }                
            })
            .catch(error => {
                flag = 1;
                console.log(error);
            })

            // office login
            if(flag === 1)
            {
            axios.get("http://localhost:5555/office/"+this.state.userid)
            .then(async response => {
                const office_arr = response.data.data;
                    if (office_arr._id == this.state.userid && office_arr.password == this.state.password) {
                        console.log("Office staff SignIn sucessfully...");
                        sessionStorage.setItem("staff",this.state.userid)
                        this.props.history.push("/")
                    }
                    else{
                        this.setState({ invalidpassmodalShow:true})
                    }                
            })
            .catch(error => {
                this.setState({ invalidpassmodalShow:true})
                console.log(error);
            })
        }
    }
    

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
            <InvalidIdPass show={this.state.invalidpassmodalShow} onHide={() =>this.setState({invalidpassmodalShow:false})} />
            <div>
                <Nav />
                <div className="" style={{ margin: "13vh 30%" }}>
                    <h2>Login : </h2><br />
                    <form className="form-group" onSubmit={this.mySubmitHandler} style={{ border: "2px solid black", borderRadius: "30px", padding: "50px" }}>
                        <label >UserId : </label>
                        <input type="text" className="form-control" name="userid" required placeholder={"Enter Your User Id"} onChange={this.myChangeHandler}></input>
                        <label>Password : </label>
                        <input type="password" className="form-control" name="password" id = "myInput" required placeholder={"Enter Your Password"} onChange={this.myChangeHandler} ></input>
                        <br />
                        <br />
                        {/* <Link to={{ pathname: "/"}} > */}
                        <button className="btn btn-primary" style={{ textAlign: "center", width: "20%" }}>Sign In</button>
                        {/* </Link> */}
                        <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }}>Back</button>
                    </form>
                </div>
                <Footer />
            </div>
            </React.Fragment>
        )
    }
}

export default SignIn;
