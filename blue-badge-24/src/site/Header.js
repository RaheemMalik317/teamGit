import React from 'react'
import Radium from 'radium';


const styles = {
    head: {
      backgroundColor: '#8535A4',
      padding: '25px',
      color: 'white',
      textAlign: 'center'
    }
  }

function Header() {

    // navigator.geolocation.getCurrentPosition(success);

    let longitude = window.localStorage.long;
    let latitude = window.localStorage.lat;

    return (
        <div >
            <h1>Your current location!</h1>

            <p>{longitude}</p>
            <p>{latitude}</p>
        
        </div>
    );
}

export default Radium(Header);