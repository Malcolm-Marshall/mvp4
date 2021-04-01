import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Plant from './Plant';


function MyPlants({ plants }) {

  return (
    <Container>
      <Row>
        <Col>
          <h3><strong><u>In My House</u></strong></h3>
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