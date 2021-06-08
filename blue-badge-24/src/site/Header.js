import React from 'react'
import {success} from '../App.js'

function Header() {

    navigator.geolocation.getCurrentPosition(success);

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

export default Header;