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
                                        <h3>Rapid Rental</h3>
                                        <p className="pb-3"><em> Your satisfaction is our main aim, Enjoy your holidays with our wheels</em></p>
                                        <p>
                                            Address:<br/>All over India<br/><br/>
                                            <strong>Phone:</strong> +919834302938<br/>
                                            <strong>Email:</strong> rapidrental@gmail.com 
                                        </p>
                                        

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 footer-links">
                                    <h4 style={{textAlign:"center"}}>Useful Links</h4>
                                    <div style={{textAlign:"center"}}>
                                    <ul style={{display: "inline-block",textAlign:"left"}}>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/#features">Features</a></li>
                                        <li><a href="/#aboutus">About us</a></li>
                                        <li><a href="/#contact">Customer Care</a></li>
                                        <li><a href="/signup">SignUp</a></li>
                                        {/* <li><a href="/#"></a></li> */}
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                <img src="assets/img/footer.svg" class="img-fluid" alt="" />
                                </div>



                            </div>
                        </div>
                    </div>


                </footer>
           
            </div>
        )
    }
}
