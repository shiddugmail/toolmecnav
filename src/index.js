import React from 'react';
import ReactDOM from 'react-dom';
import NavbarMain from './navbar';
import NavBarTop from './navbarroute';
import './css/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';

class App extends React.Component {
  render() {
    return (
    	<>
          <NavbarMain />
            {/* <NavBarTop /> */}

      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

