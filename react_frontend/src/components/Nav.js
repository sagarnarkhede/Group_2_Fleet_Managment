import React from 'react'

export default function Nav() {
    return (
        <div>
          <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex align-items-center justify-content-between">
            <div className="logo">
                <h1><a href="index.html"><span>India Drive Logo</span></a></h1>

            </div>

            <nav id="navbar" className="navbar">
                <ul>
                    <li><a className="nav-link scrollto" href="http://localhost:5555/">Home</a></li>
                    <li><a className="nav-link scrollto" href="http://localhost:5555/#features">Features</a></li>
                    <li className="dropdown"><a href="http://localhost:5555/#aboutus"><span>About India Drive</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="http://localhost:5555/#aboutUsHistory">History</a></li>
                            <li><a href="http://localhost:5555/#aboutUsFinancialResult">Financial results</a></li>
                            <li><a href="http://localhost:5555/#aboutUsManagement">Management</a></li>
                        </ul>
                    </li>
                    <li><a className="nav-link scrollto" href="http://localhost:5555/#testimonials">Testimonials</a></li>
                    <li><a className="nav-link scrollto" href="http://localhost:5555/#team">Team</a></li>
                    <li><a className="nav-link scrollto" href="http://localhost:5555/#pricing">Pricing</a></li>
                    <li><a className="nav-link scrollto" href="http://localhost:5555/#contact">Contact Us</a></li>
                    <li><a className="nav-link scrollto" href="/">Book Now</a></li>
                    <li><a className="nav-link scrollto" href="/signup">Sign up</a></li>

                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
           

        </div>
    </header>
            
        </div>
    )
}