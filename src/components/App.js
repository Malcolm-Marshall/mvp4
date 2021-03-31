import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import AddPlant from './AddPlant';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Happy Plants!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddPlant />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
