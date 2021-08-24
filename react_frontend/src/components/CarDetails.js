import React, { Component } from 'react'
import Footer from './Footer';
import Nav from './Nav';
export class CarDetails extends Component {

    render() {
        return (
            <div>
                <Nav />


                <div className="" style={{ margin: "10vh 10%" }} >
                    <h2>Car Details:</h2><br />
                    <div className="form-group" style={{ border: "2px solid black", borderRadius: "30px", padding: "50px", textAlign: "left" }}>
                     
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Car Class</th>
                                    <th scope="col">Car Type</th>
                                    <th scope="col">Daily Rate</th>
                                    <th scope="col">Weekly Rate</th>
                                    <th scope="col">Monthly Rate</th>
                                    <th scope="col">Select</th>
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
                                    <td><a href="N.A">N.A</a></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Compact Cars</td>
                                    <td>Chevrolet Cobalt or similar</td>
                                    <td>$18.00</td>
                                    <td>$120.00</td>
                                    <td>$500.00</td>
                                    <td><a href="N.A">N.A</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Intermediate car</td>
                                    <td>Pontiac G-6 or similar</td>
                                    <td>$99.99</td>
                                    <td>$999.99</td>
                                    <td>$999.9</td>
                                    <td><a href="N.A">N.A</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Sedan</td>
                                    <td>Chevrolet Monte Carlo or similar</td>
                                    <td>$20.00</td>
                                    <td>$99.00</td>
                                    <td>$210.00</td>
                                    <td><a href="N.A">N.A</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>SUV</td>
                                    <td>Honda CRV or similar</td>
                                    <td>$15.00</td>
                                    <td>$400.00</td>
                                    <td>$510.00</td>
                                    <td><a href="N.A">N.A</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <br/>

                        <button className="btn btn-primary" style={{ textAlign: "center", float: "left" }}>Continue Booking</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float: "right", width: "20%" }}>Cancel</button>

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default CarDetails
