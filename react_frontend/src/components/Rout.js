import React from 'react'
import BookCar from './BookCar';
import SignUp from './SignUp';
import  {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav'; 
function Rout() {
    return (
        <Router>
        <div>
        
        <Route path="/BookCar" component={BookCar} />
        <Route path="/SignUp" component={SignUp} /> 
        </div>
        </Router>
      );
      }

export default Rout
