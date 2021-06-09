import WeatherDisplay from '../Weather/WeatherDisplay';
import Nasa from '../Nasa/SatelliteImage';
import Ticketmaster from '../Ticketmaster/Ticketmaster';
import satelliteImage from '../Nasa/SatelliteImage';

function DisplayArea() {
    return (
        <div>
            <WeatherDisplay/>
            <Ticketmaster />
            <Nasa />
        </div>
    );
}

export default DisplayArea;