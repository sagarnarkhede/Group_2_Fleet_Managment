import React, { Component } from 'react'
import Footer from './Footer';
import Nav from './Nav';
import {Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
export class CarDetails extends Component {
    constructor(props) {
        super(props);
        console.log("cardetails",this.props);
        this.state = { 
        type:''
       
    }
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
      }
    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
      componentDidMount(){
        axios.get("http://localhost:5555/centers")
        .then(async response => {
           
            const cars_arr = response.data.data[1];
            console.log( "cars",cars_arr.cars);
            for (var x = 0; x < cars_arr.cars.length; x++) {
                console.log("car type",cars_arr.cars[x].cartype);
             
                if (cars_arr.cars[x].cartype == "small car" ) {
                    
                     document.getElementById("smallcar").disabled = false 
                    
                    } else if(cars_arr.cars[x].cartype == "compact car"){
                    document.getElementById("compcar").disabled = false
                  } else if(cars_arr.cars[x].cartype == "Intermediate car"){
                    document.getElementById("intercar").disabled = false
                  } else if(cars_arr.cars[x].cartype == "sedan"){
                    document.getElementById("sedan").disabled = false
                  } else if(cars_arr.cars[x].cartype == "SUV"){
                    document.getElementById("suv").disabled = false
                  } 
            
            }
        })
        .catch(error => {
            console.log(error);
        })

      }
    
    

    render() {
        return (
            <div>
                <Nav />


                <div className="" style={{ margin: "10vh 10%" }} >
                    <h2>Car Details:</h2><br />
                    <div className="form-group" style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
                     
                        <table class="table table-striped" onSubmit={this.mySubmitHandler}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Car Class</th>
                                    <th scope="col">Car Type</th>
                                    <th scope="col">Daily Rate</th>
                                    <th scope="col">Weekly Rate</th>
                                    <th scope="col">Monthly Rate</th>
                                    <th scope="col" >Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Small Cars</td>
                                    <td>Chevrolet Aveo or similar</td>
                                    <td>$12.00</td>
                                    <td>$79.00</td>
                                    <td>$310.00</td>
                                    {/* <td onClick={this.myChangeHandler("Small Cars")}>N.A</td> */}
                                    <td><button disabled id="smallcar"  className="btn btn-primary" onClick={ async() => { await this.setState({type:"Small Cars" }); console.log(this.state)}} >select</button></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Compact Cars</td>
                                    <td>Chevrolet Cobalt or similar</td>
                                    <td>$18.00</td>
                                    <td>$120.00</td>
                                    <td>$500.00</td>
                                    <td><button id="compcar" disabled className="btn btn-primary" onClick={ async() => { await this.setState({type:"Compact Cars" }); console.log(this.state)}} >select</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Intermediate car</td>
                                    <td>Pontiac G-6 or similar</td>
                                    <td>$99.99</td>
                                    <td>$999.99</td>
                                    <td>$999.9</td>
                                    <td><button  id="intercar" disabled className="btn btn-primary" onClick={ async() => { await this.setState({type:"Intermediate" }); console.log(this.state)}} >select</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Sedan</td>
                                    <td>Chevrolet Monte Carlo or similar</td>
                                    <td>$20.00</td>
                                    <td>$99.00</td>
                                    <td>$210.00</td>
                                    <td><button id="sedan" disabled className="btn btn-primary" onClick={ async() => { await this.setState({type:"Sedan" }); console.log(this.state)}} >select</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>SUV</td>
                                    <td>Honda CRV or similar</td>
                                    <td>$15.00</td>
                                    <td>$400.00</td>
                                    <td>$510.00</td>
                                    <td><button id="suv" disabled className="btn btn-primary" onClick={ async() => { await this.setState({type:"SUV" }); console.log(this.state)}} >select</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <br/>
                        <Link to={{ pathname: "/addon",state:this.state}} >
                        <button className="btn btn-primary" style={{ textAlign: "center", float: "left" }}>Continue Booking</button>
                        </Link>
                        <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }}>Cancel</button>

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default CarDetails
