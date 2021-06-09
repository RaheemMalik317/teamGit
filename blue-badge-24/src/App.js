import React from 'react';
import './App.css';
import Header from './site/Header';
import DisplayArea from './site/DisplayArea';
import Footer from './site/Footer';
import Radium from 'radium';
// import Success from './site/GetLocation';


const styles = {
  app: {
    backgroundColor: '#8535A4',
    padding: '25px'
  }
}


function App() {
  function success(position) {
  let latitude  = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log('App', latitude, longitude);
  localStorage.setItem('long', longitude);
  localStorage.setItem('lat', latitude);
  }
  
  navigator.geolocation.getCurrentPosition(success);


  return (
    <div style={styles.app} className="App">
      <Header/>
      <DisplayArea/>
      <Footer/>
    </div>
  );
}

export default Radium(App);



// !THIS IS HOW TO CALL you cant just call success VVVV
  // navigator.geolocation.getCurrentPosition(success);
