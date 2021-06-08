import React, {useState} from 'react'
import {Button} from 'reactstrap'
// import TicketmasterResults from './TicketmasterResults'

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey='
const key = '7drYHlAFPDVkMAGRvyAmhdDlCUWyZzGv'

function Ticketmaster(props) {
    console.log(props);
    const [results, setResults] = useState([])

    let lon = window.localStorage.long;
    let lat = window.localStorage.lat;

let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&appid=${key}`;

console.log(apiUrl);

let fetchMaster = () => {
    let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&appid=${key}`;


    fetch(apiUrl)
    .then(res => res.json())
    .then(data => setResults(data.response))
    .catch(err => console.log(err));
}











    return (
        <div >

        </div>
    );

}

export default Ticketmaster;