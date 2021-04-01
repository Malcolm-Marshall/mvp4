import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import AddPlant from './AddPlant';
import MyPlants from './MyPlants';
const axios = require('axios');
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [plants, setPlants] = useState([])

  const getAll = () => {
    axios.get('http://localhost:3000/plants')
    .then((result) => setPlants(result.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAll();
  }, []);

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
      <Row>
        <Col>
          <MyPlants plants={plants}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
