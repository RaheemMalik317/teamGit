
import React, {useState} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading} from 'reactstrap';
import Radium from 'radium';


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '7a58d9b61109b78f87f3ebf6c6e68e0a';
const apiKey2 = '728d62266f51e8dc10c7e2b60337e3eb';

const styles = {
    weather: {
        backgroundColor: '#2F22AD',
        color: 'white',
        padding: '25px',
        margin: '25px',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#9a3dal',
        borderColor: '#9a3dal',
        color: 'black',
        borderRadius: '5px',
        height: '4em',
        width: '10em',
        ':hover': {
            backgroundColor: '#DB4A9D',
            borderColor: '#DB4A9D'
        }
}
}

const Weather = (props) =>{
    // console.log(props); 
    const [results, setResults] =useState([]);
    const [metric, setMetric] =useState(false);
    const lat= localStorage.getItem('lat');
    const long = localStorage.getItem('long');

    // let temp = "";
    // let description = "";
    // let secondDescription = "";
    // let feelsLike = "";
    // let tempMin = "";
    // let tempMax= "";

    const fetchWeather = () => {
        let apiURL = `${baseUrl}lat=${lat}&lon=${long}&appid=${apiKey2}&units=`;
        apiURL = metric ? apiURL +`metric`: apiURL + `imperial` ;
        console.log('weather url', apiURL);
        fetch(apiURL)
            .then(res => res.json())
            .then(response => setResults(response))
            .catch(err => console.log(err));
    }

    console.log('weather results', results)
    let temp = results.main === undefined ? "unable to get data" : results.main.temp_max;
    let description = results.weather === undefined? "unable to get data" :results.weather.main
    let secondDescription = results.weather === undefined ? "unable to get data": results.weather.description
    let feelsLike = results.main === undefined ? "unable to get data": results.main.feels_like
    let tempMin = results.main === undefined ? "unable to get data": results.main.temp_min
    let tempMax= results.main === undefined ? "unable to get data" :results.main.temp_max

    let tempType = metric? 'C' : 'F'

    return (
        <div>
            <button onClick={fetchWeather}>Get Weather</button>
            <h3>Current Weather</h3>
            <ul style={{"listStyle": "none"}}>
                <li>{description}</li>
                <li>{secondDescription}</li>
                <li>Temperature:</li>
                <li>{temp}&deg;{tempType}</li>
                <li>Feels Life:</li>
                <li>{feelsLike}&deg;{tempType}</li>
                <li>Low:</li>
                <li>{tempMin}&deg;{tempType}</li>
                <li>High:</li>
                <li>{tempMax}&deg;{tempType}</li>
            </ul>
            <button onClick={()=>{setMetric(true); fetchWeather()}}>Celsius</button>
            <button onClick={()=>{setMetric(false); fetchWeather()}}>Imperial</button>
        </div>
    );
}

export default Radium(Weather);