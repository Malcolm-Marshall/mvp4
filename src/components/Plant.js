import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


function Plant({ plant }) {

  return (
    <Container>
      <Col>
        <Row>
          <h4>{plant.name}</h4>
        </Row>
        <Row>
          <Col>
            {
              plant.photo ?
                <Image
                  src={plant.photo}
                  width={78}
                  height={78}
                  thumbnail
                />
                : null
              }
          </Col>
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