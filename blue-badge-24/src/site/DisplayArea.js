import Weather from '../Weather/Weather';
import Nasa from '../Nasa/Nasa';
import Ticketmaster from '../Ticketmaster/Ticketmaster';

function DisplayArea() {
    return (
        <div>
            <Weather/>
            <Ticketmaster />
        </div>
    );
}

export default DisplayArea;