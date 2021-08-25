import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import CarDetails from './CarDetails';
import BookCar from './BookCar';
import My from './my'

class Routes extends Component {
  
    render() {
      var state={name:"sagar", age:25};
        return (
            <Router>
            
                    {/* <Link to="/">SignIn</Link>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/CarDetails">CarDetails</Link>
                    <Link to="/BookCar">BookCar</Link> */}
                    <Link to={{pathname:"/my",
                     
                        state
                        }} >my</Link>
                  
      
             
              <Switch>
                {/* <Route exact path="/">
                  <SignIn />
                </Route>
                <Route path="/SignUp">
                  <SignUp />
                </Route>
                <Route path="/CarDetails">
                  <CarDetails />
                </Route>
                <Route path="/BookCar">
                  <BookCar />
                </Route> */}
                <Route path="/my">
                  <My/>
                </Route>
                {/* <Route path="/my" component={()=><My data="hi" />} /> */}
                {/* <Route path="/">
                  < />
                </Route> */}
              </Switch>
           
          </Router>
        );
    }
}

export default Routes;