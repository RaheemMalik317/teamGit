import React, {useState} from 'react';


// import {Form} from 'reactstrap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const apiKey = 'qLamhnDq4RdZ1cxgCt3JvDOkaS8SVcL3Cdyop7To';

const NASA = (props) => {
    const [results, setResults] = useState([]);
    const[userDate, setUserDate] = useState(0);
    const lat = localStorage.getItem('lat');
    const long = localStorage.getItem('long');
    
    let currentDate = new setUserDate();
    // let month = getMonth() + 1;
    // let day = getDate() + 1;
    // let year = getFullYear();
    // if (day < 10 && month < 10) {
    //     day = `0` + `${day}`;
    //     month = `0` + `${month}`;
    // } else if (day < 10) {
    //     day = `0` + `${day}`;
    // } else if (month < 10) {
    //     month = `0` + `${month}`;
    // }





let fetchImage = () => {
    let apiUrl = `${baseURL}?lat=${lat}&lon=${long}&date=${setUserDate}&api_key=ULctjVgrZvQan7OgvbRM6sm3nfsDujl6wWBjaXW4`;

    // fetch(apiUrl)
    //     .then(res => res.json())
    //     .then(data => setResults())
    //     .catch(err => console.log(err));

        return (
            <div >
                <h3>You are here</h3>
            </div>
        );

        }
}


export default NASA;