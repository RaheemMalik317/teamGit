import React, {useState} from 'react';
import {Button, ListGroup, ListGroupItem, ListGroupItemHeading} from 'reactstrap';


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '7a58d9b61109b78f87f3ebf6c6e68e0a';

const Weather = (props) =>{
    // console.log(props); 
    const [results, setResults] =useState([]);
    const [imperial, setImperial] =useState(true);

    const lat= localStorage.getItem('lat');
    const long = localStorage.getItem('long');

    // console.log(lat,long);

    const fetchWeather = () => {
    let apiURL = `${baseUrl}lat=${lat}&lon=${long}&appid=${apiKey}&units=`;
    apiURL = imperial ? apiURL + `imperial` : apiURL +`metric`;
    console.log('weather url', apiURL);
    fetch(apiURL)
        .then(res => res.json())
        .then(response => setResults(response))
        .catch(err => console.log(err))
    }

    console.log(results);
    // let temp = results.main.temp;
    // console.log(temp);

    let setCentigrade =()=> {
            setImperial(false);
            fetchWeather();
        }

    let setFahrenheit = () =>{
            setImperial(true);
            fetchWeather();
    }

    // have to click button twice for these to work??? need to investigate.... FF
    return (
        <div>
            <ListGroupItemHeading>Current Weather</ListGroupItemHeading>
            <ListGroup>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem></ListGroupItem>
            </ListGroup>
            <Button onClick={setCentigrade}>Celsius</Button>
            <Button onClick={setFahrenheit}>Imperial</Button>
        </div>
    );
}

export default Weather;