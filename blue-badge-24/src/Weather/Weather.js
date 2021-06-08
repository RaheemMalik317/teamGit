import React, {useState} from 'react';
import {Button} from 'reactstrap';
// import GetLocation from '../site';

const baseUrl = 'api.openweathermap.org/data/2.5/weather?';
const apiKey = '7a58d9b61109b78f87f3ebf6c6e68e0a';

const Weather = (props) =>{
    console.log(props);
    const [results, setResults] =useState([])

    const lat= 59.088112;
    const lon = 26.177601;
    
    
    console.log(apiUrl);

    const fetchWeather= () => {
        let apiURL = `${baseURL}lat=${lat}&lon=${lon}&appid=${apiKey}`;

        fetch(apiURL)
            .then(res => res.json())
            .then(data => setResults(data.response))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {results}
            {/* <Button onToggle={}></Button> */}
        </div>
    );
}

export default Weather;