import React, {useState} from 'react';
// import {Button} from 'reactstrap';


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '7a58d9b61109b78f87f3ebf6c6e68e0a';

const Weather = (props) =>{
    // console.log(props);
    const [results, setResults] =useState([]);

    const lat= localStorage.getItem('lat');
    const long = localStorage.getItem('long');

    console.log(lat,long)

    let apiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=59.088112&lon=26.177601&appid=7a58d9b61109b78f87f3ebf6c6e68e0a';

    // console.log(apiUrl);

    // fetch(apiURL)
    //     .then(res => res.json())
    //     .then(response => setResults(response))
    //     .catch(err => console.log(err))

    // console.log(results);
    // let temp = results.

    return (
        <div>
            <h3>Current Weather</h3>
            {/* <Button onToggle={}></Button> */}
        </div>
    );
}

export default Weather;