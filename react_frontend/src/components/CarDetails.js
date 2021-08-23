import React, { Component } from 'react'
import Footer from './Footer';
import Nav from './Nav';
export class CarDetails extends Component {

    render() {
        return (
            <div>
                <Nav />
                
                 <div className=""  style={{ margin: "13vh 15%"}} >
                   <h2>Car Details:</h2><br/>
                   <form className="form-group" style={{border: "2px solid black",borderRadius: "30px",  padding: "50px", textAlign: "left" }}>
                   <table className="table" >
                <br/>
                <tr>
                <th rowspan="2" >CAR CLASS</th>
                <th rowspan="2">CAR TYPE</th>
                <th colspan="3">BASE RATE</th>
               
                </tr>
                <tr>
                <th>DAILY</th><th>WKLY</th><th>MONTHLY</th>
                </tr>
                
                        <tr>
                        <td>Small Cars</td>
                        <td>Chevrolet Aveo or similar</td>
                        <td>$12.00</td>
                        <td>$79.00</td>
                        <td>$310.00</td>
                        <td><a href="Select">Select</a></td>
                        </tr><br/><br/>
                        <tr>
                        <td>Compact Cars</td>
                        <td>Chevrolet Cobalt or similar</td>
                        <td>$18.00</td>
                        <td>$120.00</td>
                        <td>$500.00</td>
                        <td><a href="Select">Select</a></td>
                        </tr><br/><br/>
                        <tr>
                        <td>Intermediate car</td>
                        <td>Pontiac G-6 or similar</td>
                        <td>$99.99</td>
                        <td>$999.99</td>
                        <td>$999.9</td>
                        <td><a href="Select">Select</a></td>
                        </tr><br/><br/>
                        <tr>
                        <td>Sedan</td>
                        <td>Chevrolet Monte Carlo or similar</td>
                        <td>$20.00</td>
                        <td>$99.00</td>
                        <td>$210.00</td>
                        <td><a href="Sold">Sold</a></td>
                        </tr><br/><br/>
                        <tr>
                        <td>SUV</td>
                        <td>Honda CRV or similar</td>
                        <td>$15.00</td>
                        <td>$400.00</td>
                        <td>$510.00</td>
                        <td><a href="N.A">N.A</a></td>
                        </tr><br/>
                        
                    <br/>
                    <br/>
                    </table> 
                    <button className="btn btn-primary" style={{ textAlign: "center" ,float:"left"}}>Continue Booking</button>
                        <button className="btn btn-primary" style={{ textAlign: "center", float:"right" ,width:"20%"}}>Cancel</button>
                    
                    </form>
                    </div> 
                    
                <Footer/>
            </div>
        )
    }
}

export default CarDetails
