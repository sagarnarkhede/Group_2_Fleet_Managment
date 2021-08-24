import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import App from './App'

import reportWebVitals from './reportWebVitals';
import BookCar from './components/BookCar';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import CarDetails from './components/CarDetails';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BookCar />
    <SignUp />
    <SignIn />
    <CarDetails/>
    {/* <Footer /> */}
    {/* <Nav /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
