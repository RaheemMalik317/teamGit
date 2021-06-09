import React, { useState } from "react";
// import { Button } from "reactstrap";
 import ResultMaster from './ResultMaster'

const baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
const key = "7drYHlAFPDVkMAGRvyAmhdDlCUWyZzGv";

function Ticketmaster(props) {
  console.log(props);
  const [results, setResults] = useState([]);
  //const [localStartDateTime, setLocalStartDateTime] = useState([]);
  //const [localStartEndDateTime, setLocalStartEndDateTime] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
 // const [text, setText] = useState()

  const lat = localStorage.getItem("lat");
  const long = localStorage.getItem("long");
  console.log("tm", lat, long);

  let apiUrl = `${baseUrl}lat=${lat}&lon=${long}&apikey=${key}`;

  console.log(apiUrl);

  let fetchResults = () => {
    let url=`${baseUrl}&latlong=${lat},${long}&radius=25&unit=miles&locale=*&size=10&page=${pageNumber}&sort=date,asc&apikey=${key}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.response.docs))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPageNumber(0);
    console.log('clicking');
    fetchResults();
  };

  const changePageNumber = (event, direction) => {
    event.preventDefault();
    if (direction === "down") {
      if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
        fetchResults();
      }
    }
    if (direction === "up") {
      setPageNumber(pageNumber + 1);
      fetchResults();
    }
  };

  return (
    <div>
      {/* <input  onChange={(e) => handleSubmit(e)} /> */}
      <span>Get Your Tickets Here (required):</span>
      <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required/>
      <br />
      <span>Start Date:</span>
      <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setLocalStartDateTime(e.target.value)}/>
      <br />
      <span>End Date: </span>
      <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setLocalStartEndDateTime(e.target.value)}/>
      <br />
      <button className="submit" onChange={(e) => handleSubmit(e)}>Let's PARTY!</button>
    </div>
   ); 
}
  
export default Ticketmaster;




// if (localStartDateTime.value !== '')
// console.log(localStartDateTime.value);