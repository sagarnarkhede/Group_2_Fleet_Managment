import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from '../components/Details';
// import UserForm from '../components/UserForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CarDetails from './CarDetails';
import BookCar from './BookCar';
import Location from './Location';
import PNF from './PNF';
import Addon from './Addon';
import CustomerInfoPage from './CustomerInfoPage';
import ConfirmBooking from './ConfirmBooking';
import Home from './Home';

const AppRouter = () => (
  <BrowserRouter>
    
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={BookCar} path="/bookcar" />
        <Route component={Location} path="/location" />
        <Route component={Details} path="/details" /> 
        <Route component={Addon} path="/addon" /> 
        <Route component={CustomerInfoPage} path="/CustomerInfoPage" /> 
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={CarDetails} path="/cardetail" />
        <Route component={ConfirmBooking} path="/confirmbooking" />
        <Route component={PNF} path="*" />
      </Switch>
    
  </BrowserRouter>
);

export default AppRouter;
