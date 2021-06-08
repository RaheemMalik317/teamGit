import React from 'react';
import './App.css';
import Header from './site/Header';
import DisplayArea from './site/DisplayArea';
import Footer from './site/Header';

function App() {



  return (
    <div className="App">
      <Header/>
      <DisplayArea/>
      <Footer/>
    </div>
  );
}

export default App;

function success(position) {
  let latitude  = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude, longitude);
  }


// !THIS IS HOW TO CALL you cant just call success VVVV
  // navigator.geolocation.getCurrentPosition(success);
