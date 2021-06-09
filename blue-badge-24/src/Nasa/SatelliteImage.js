import React from 'react';
import {Form} from 'reactstrap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const apiKey = 'ULctjVgrZvQan7OgvbRM6sm3nfsDujl6wWBjaXW4';

function NASA(props) {
    const [results, setResults] = useState([]);
    cosnt[userDate, setUserDate] = useState([]);
    const lat = localStorage.getItem('lat');
    const long = localStorage.getItem('long');
    

    let Date = new Date();
    let month = getMonth() + 1;
    let day = getDate() + 1;
    let year = getFullYear();
    if (day < 10 && month < 10) {
        day = `0` + `${day}`;
        month = `0` + `${month}`;
    } else if (day < 10) {
        day = `0` + `${day}`;
    } else if (month < 10) {
        month = `0` + `${month}`;
    }
}




let satelliteImage = () => {
    let apiUrl = `${basURL}?lat=${lat}&lon=${long}&date=${setUserDate}&api_key=ULctjVgrZvQan7OgvbRM6sm3nfsDujl6wWBjaXW4`;

    fetch(apiUrl)

        .then(res => res.json())
        .then(data => setResults(response))
        .catch(err => console.log(err));

        console.log(results);

        return (
            <div >
                <h3>You are here</h3>
                <Form on/>
            </div>
        );


}

export default satelliteImage;