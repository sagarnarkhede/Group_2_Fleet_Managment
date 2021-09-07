import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import App from './App'

import reportWebVitals from './reportWebVitals';
// import BookCar from './components/BookCar';
// import Nav from './components/Nav';
// import SignUp from './components/SignUp';
// import Footer from './components/Footer';
// import SignIn from './components/SignIn';
// import CarDetails from './components/CarDetails';
// import Forgetpassword from './components/Forgetpassword';
// import Addon from './components/Addon';
// import Location from './components/Location';
// import Routes from './components/Routes';
// import CustomerInfoPage from './components/CustomerInfoPage';
import AppRouter from './components/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    {/* <CustomerInfoPage /> */}
    {/* <App /> */}
 {/* <BookCar />  */}
      {/* <SignUp />
    <SignIn />
    <CarDetails/>
    <Forgetpassword />
    <Addon/>
    <Location/>
    <CarDetails/>   */}
    {/* <Footer /> */}
    {/* <Nav /> */}
    {/* <Routes /> */}
    <AppRouter />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
