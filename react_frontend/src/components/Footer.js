import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <div className="footer-info">
                                        <h3>India Drive</h3>
                                        <p className="pb-3"><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolores consectetur. Quisquam earum beatae sunt?</em></p>
                                        <p>
                                            Address:<br/> Lorem ipsum dolor sit amet.<br/><br/>
                                            <strong>Phone:</strong> +91 1234567890<br/>
                                            <strong>Email:</strong> myemail@gmail.com 
                                        </p>
                                        

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 footer-links">
                                    <h4 style={{textAlign:"center"}}>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Modify/Cancel Booking</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-6 footer-links">
                                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Lorem, ipsum.</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Lorem, ipsum.</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Lorem, ipsum.</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Lorem, ipsum.</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Lorem, ipsum.</a></li>
                                    </ul>
                                </div>



                            </div>
                        </div>
                    </div>


                </footer>
           
            </div>
        )
    }
}
