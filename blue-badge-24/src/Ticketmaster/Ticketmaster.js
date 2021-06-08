import React, {useState} from 'react'
import TicketmasterResults from './TicketmasterResults'

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey='
const key = '7drYHlAFPDVkMAGRvyAmhdDlCUWyZzGv'

function Ticketmaster(props) {
    console.log(props);

let lat=getCurrentPosition(coords.latitude)
let lon=getCurrentPosition(coords.longitude);

let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&appid=${key}`;

let fetchMaster = () => {
    let apiUrl = `${baseUrl}lat=${lat}&lon=${lon}&appid=${key}`;

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => )
}










    return (
        <div >
        
        </div>
    );
}

export default Ticketmaster;