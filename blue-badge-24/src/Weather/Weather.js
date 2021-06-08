import React from 'react';
import {Button} from 'reactstrap';
// import GetLocation from '../site';

const baseUrl = `api.openweathermap.org/data/2.5/weather?`;
const apiKey = `7a58d9b61109b78f87f3ebf6c6e68e0a`;

const Weather = (props) =>{
    console.log(props);

    let lat= getCurrentPosition(coords.latitude);
    let lon = getCurrentPosition(coords.longitude);
    
    let apiURL = `${baseURL}lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const fetchWeather= () => {

    }
    return (
        <div>
            <fetchWeather/>
            <Button onToggle={}></Button>
        </div>
    );
}

export default Weather;