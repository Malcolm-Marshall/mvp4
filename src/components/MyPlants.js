import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Plant from './Plant';


function MyPlants({ plants }) {

  return (
    <Container>
      <Row>
        <Col>
          <hr></hr>
          <h3>My Plants</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          {
            plants.map((plant, i) => {
              console.log(plant)
              return <Plant plant={plant} key={i}/>
            })
          }
        </Col>
      </Row>
    </Container>
  )
};

export default MyPlants;