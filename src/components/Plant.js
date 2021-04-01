import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Plant({ plant }) {

  return (
    <Container>
      <Col>
        <Row>
        <h4>{plant.name}</h4>
        </Row>
        <Row>
        Water: &nbsp;
          <p>{plant.water}</p>
        </Row>
        <Row>
        Sun: &nbsp;
          <p>{plant.sun}</p>
        </Row>
      </Col>
    </Container>
  )
};

export default Plant;