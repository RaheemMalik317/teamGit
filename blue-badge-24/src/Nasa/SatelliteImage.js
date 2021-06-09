import React from 'react';
import Radium from 'radium';
const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const apiKey = 'qLamhnDq4RdZ1cxgCt3JvDOkaS8SVcL3Cdyop7To';
const styles = {
    nasa: {
        backgroundColor: '#8535A4',
        padding: '25px',
        textAlign: 'center'
    }
}
const lat = localStorage.getItem('lat');
const long = localStorage.getItem('long');
// const NASA = (props) => {
//     const [results, setResults] = useState([]);
// }
let fetchImage = (json) => {
    newFucntion();
    return (
        <div style={styles.nasa}>
            <h3>You are here</h3>
            <img src= {json} alt='satellite image'/>
        </div>
    );
}
let newFucntion = () => {
    let apiUrl = `${baseURL}?lat=${lat}&lon=${long}&api_key=${apiKey}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(json => fetchImage(json))
        .catch(err => console.log(err));
}
export default Radium(fetchImage);