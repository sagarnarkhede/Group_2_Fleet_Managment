import React from 'react'
import Handover from './Modal/Handover';
import ModifyandCancel from '../components/Modal/ModifyandCancel'
import { Link } from 'react-router-dom';
import Return from './Modal/Return';
import Cancellation from './Modal/Cancellation';
import SuccesPop from './Modal/SuccesPop';
import FailPop from './Modal/FailPop';
import AreYouSurePop from './Modal/AreYouSurePop';
import InvalidBookId from './Modal/InvalidBookIdPop';
import InvalidIdPass from './Modal/InvalidIdPass';
//import BookingSuccesful from './Modal/BookingSuccesful';

export default function Nav(props) {
    const [testmodalShow, setsuccessModalShow] = React.useState(false);
    const [failmodalShow, setfailModalShow] = React.useState(false);
    const [areyousuremodalShow, setareyousureModalShow] = React.useState(false);
    const [invalidbookmodalShow, setinvalidboookModalShow] = React.useState(false);
    const [invalidpassmodalShow, setinvalidpassModalShow] = React.useState(false);
    //const [bookingsuccesmodalShow, setbookingsuccesModalShow] = React.useState(false);
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
                    {/* <li><a className="nav-link scrollto"  onClick={() => setbookingsuccesModalShow(true)}>BookingSuccesful</a></li> */}
                    {/* <li><a className="nav-link scrollto"  onClick={() => setinvalidpassModalShow(true)}>InvalidIdPass</a></li>
                    <li><a className="nav-link scrollto"  onClick={() => setinvalidboookModalShow(true)}>InvalidBookId</a></li>
                    <li><a className="nav-link scrollto"  onClick={() => setareyousureModalShow(true)}>AreYouSurePop</a></li>
                    <li><a className="nav-link scrollto"  onClick={() => setfailModalShow(true)}>FailPop</a></li>
                    <li><a className="nav-link scrollto"  onClick={() => setsuccessModalShow(true)}>SuccesPop</a></li> */}
                    <li><a className="nav-link scrollto" href="/staffbookcar">Booking</a></li>
                    <li><a className="nav-link scrollto"  onClick={() => setModalShow1(true)} >Modify/Cancel</a></li>
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
                <h1><a href="index.html"><span>Rapid Rental</span></a></h1>
                
                    <Handover  show={modalShow}
                    onHide={() => setModalShow(false)} />
                    <ModifyandCancel  show={modalShow1}
                    onHide={() => setModalShow1(false)} />
                    <Return show={returnmodalShow} onHide={() => setreturnModalShow(false)}/>  
                    <Cancellation show={cancellationmodalShow} onHide={() => setcancellationModalShow(false)}/>  
                    <SuccesPop show={testmodalShow} onHide={() => setsuccessModalShow(false)}/>
                    <FailPop show={failmodalShow} onHide={() => setfailModalShow(false)}/> 
                    <AreYouSurePop show={areyousuremodalShow} onHide={() => setareyousureModalShow(false)}/>
                    <InvalidBookId show={invalidbookmodalShow} onHide={() => setinvalidboookModalShow(false)}/> 
                   {/* <BookingSuccesful show={bookingsuccesmodalShow} onHide={() => setbookingsuccesModalShow(false)}/>   */}
                    <InvalidIdPass show={invalidpassmodalShow} onHide={() => setinvalidpassModalShow(false)}/>  
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
