import {Row} from 'reactstrap'
import Radium from 'radium';

const styles = {
    foot: {
      backgroundColor: '#652FA8',
      textAlign: 'center',
      color: 'white',
      padding: '10px'
    }
  }



const Footer=() => {
    return (
        <footer style={styles.foot}>
            <Row>
                <p>&copy;Made By: Raheem G, Jessica W, Hope, Faith Eleven Fifty 2021</p>
            </Row>
        </footer>
    );
}

export default Radium(Footer);