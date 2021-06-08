import WeatherDisplay from '../Weather/WeatherDisplay';
import Nasa from '../Nasa/Nasa';
import Ticketmaster from '../Ticketmaster/Ticketmaster';

function DisplayArea() {
    return (
        <div>
            <WeatherDisplay/>
            <Ticketmaster />
        </div>
    );
}

export default DisplayArea;