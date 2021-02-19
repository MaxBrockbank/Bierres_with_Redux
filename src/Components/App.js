import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Control from './Control';
import './../App.css';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <React.Fragment>
      <Container>
        <div className="pageAdjust">
          <Header />
          <Control />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
