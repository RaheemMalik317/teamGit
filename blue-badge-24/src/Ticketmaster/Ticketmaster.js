import React, {useState} from 'react'
import {Button} from 'reactstrap'
// import TicketmasterResults from './TicketmasterResults'

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const key = '7drYHlAFPDVkMAGRvyAmhdDlCUWyZzGv'

function Ticketmaster(props) {
    console.log(props);
    const [results, setResults] = useState([])
    

    const lat= localStorage.getItem('lat');
    const long = localStorage.getItem('long');
    console.log('tm', lat, long)


    let apiUrl = `${baseUrl}lat=${lat}&lon=${long}&apikey=${key}`;

console.log(apiUrl);

let fetchMaster = () => {
    //let apiUrl = `${baseUrl}lat=${lat}&lon=${long}&apikey=${key}`;


    fetch(apiUrl)
    .then(res => res.json())
    .then(data => setResults(data.response))
    .catch(err => console.log(err));
}











    return (
        <div >

           <h3>Get Your Tickets Here!</h3>

        </div>
    );

}

export default Ticketmaster;