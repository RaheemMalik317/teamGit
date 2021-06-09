import React, {useState} from 'react'
import {Button} from 'reactstrap'
// import TicketmasterResults from './TicketmasterResults'

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const key = '7drYHlAFPDVkMAGRvyAmhdDlCUWyZzGv'

function Ticketmaster(props) {
    console.log(props);
    const [results, setResults] = useState([]);
    const [localStartDateTime, setLocalStartDateTime] = useState([]);
    const [localStartEndDateTime, setLocalStartEndDateTime] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [search, setSearch]= useState('')
    

    const lat= localStorage.getItem('lat');
    const long = localStorage.getItem('long');
    console.log('tm', lat, long)


    let apiUrl = `${baseUrl}lat=${lat}&lon=${long}&apikey=${key}`;

console.log(apiUrl);

let fetchResults = () => {
    let url = `${baseUrl}lat=${lat}&lon=${long}&api-key=${key}&page=
    ${pageNumber}&q=${search}`;
    url = localStartDateTime ? url + `&begin_date=${localStartDateTime}` :url;
    url = localStartEndDateTime ? url + `&end_date=${localStartEndDateTime}` : url;


    fetch(apiUrl)
    .then(res => res.json())
    .then(data => setResults(data.response))
    .catch(err => console.log(err));
}

const hadnleSubmit = (event) => {
    event.preventDefault();
    setPageNumber(0);
    fetchResults();
}

const changePageNumber = (event, direction) => {
    event.preventDefault()
    if (direction === 'down') {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
            fetchResults();
        }
    }
    if (direction === 'up') {
        setPageNumber(pageNumber + 1);
        fetchResults()
    }
}











    return (
        <div >

           <h3>Get Your Tickets Here!</h3>

        </div>
    );

}

export default Ticketmaster;