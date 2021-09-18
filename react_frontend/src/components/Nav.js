import React from 'react'
import Handover from './Modal/Handover';
import ModifyandCancel from '../components/Modal/ModifyandCancel'
import { Link } from 'react-router-dom';
import Return from './Modal/Return';
import Cancellation from './Modal/Cancellation';


export default function Nav(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [returnmodalShow, setreturnModalShow] = React.useState(false);
    const [cancellationmodalShow, setcancellationModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [isStaff, setStaff] = React.useState(sessionStorage.getItem("staff"))
    const [isUser, setUser] = React.useState(sessionStorage.getItem("user"))



   function isLogin(){
            if(isStaff)
            {
                return(
                <React.Fragment>
                    <li><a className="nav-link scrollto" href="/staffbookcar">Booking</a></li>
                    <li><a className="nav-link scrollto"  onClick={() => setcancellationModalShow(true)}>Cancellation</a></li>
                    <li><a className="nav-link scrollto" onClick={() => setModalShow(true)}>Hand-over</a></li>
                    <li><a className="nav-link scrollto" onClick={() => setreturnModalShow(true)}>Return</a></li>
                    <li><a className="nav-link scrollto" onClick={()=> {sessionStorage.removeItem("staff");setStaff("");}}>Log Out</a></li>
                </React.Fragment>)
            }
            else  if(isUser)
            {
                return(
                <React.Fragment>
                    <li><a className="nav-link scrollto" href="/#contact">Customer care</a></li> 
                        <li className="dropdown"><a href="/#aboutus"><span>About India Drive</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/#aboutUsHistory">History</a></li>
                                <li><a href="/#aboutUsFinancialResult">Financial results</a></li>
                                <li><a href="/#aboutUsManagement">Management</a></li>
                            </ul>
                        </li>
                    <li><a className="nav-link scrollto"  onClick={() => setModalShow1(true)} >Modify/Cancel</a></li>
                    <li><a className="nav-link scrollto" onClick={()=> {sessionStorage.removeItem("user");setUser("");}}>Log Out</a></li>
                </React.Fragment>)
            }
            else{
                return (
                    <React.Fragment>
                        {/* <li><a className="nav-link scrollto" href="/#features">Features</a></li> */}
                        <li><a className="nav-link scrollto" href="/#contact">Customer care</a></li> 
                        <li className="dropdown"><a href="/#aboutus"><span>About India Drive</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/#aboutUsHistory">History</a></li>
                                <li><a href="/#aboutUsFinancialResult">Financial results</a></li>
                                <li><a href="/#aboutUsManagement">Management</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="/signup">Sign up</a></li>

                        <li><a className="nav-link scrollto" href="/signin">Log In</a></li>
                        
                    </React.Fragment>
                )
                
            }
    }

    return (
        <div>
          <header id="header" className="fixed-top d-flex align-items-center header-transparent" style={props.style}>
            <div className="container d-flex align-items-center justify-content-between">
            <div className="logo">
                <h1><a href="index.html"><span>India Drive Logo</span></a></h1>
                
                    <Handover  show={modalShow}
                    onHide={() => setModalShow(false)} />
                    <ModifyandCancel  show={modalShow1}
                    onHide={() => setModalShow1(false)} />
                    <Return show={returnmodalShow} onHide={() => setreturnModalShow(false)}/>  
                    <Cancellation show={cancellationmodalShow} onHide={() => setcancellationModalShow(false)}/>  
            </div>
            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto" href="/">Home</a></li>

                    
                    {isLogin()}
                    {/* {isUserLogin()} */}
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </div>
        </header>
            
        </div>
    )
}
