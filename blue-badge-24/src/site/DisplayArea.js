import WeatherDisplay from '../Weather/WeatherDisplay';
import Weather from '../Weather/Weather';
import Nasa from '../Nasa/Nasa';
import Ticketmaster from '../Ticketmaster/Ticketmaster';
import Radium from 'radium';

const styles = {
    app: {
      backgroundColor: '#8535A4',
      padding: '25px',
      display: 'flex',
      flexDirection: 'row'
    }
  }
  

function DisplayArea() {
    return (
        <div>
            <Weather/>
            <Ticketmaster />
        </div>
    );
}

export default Radium(DisplayArea);