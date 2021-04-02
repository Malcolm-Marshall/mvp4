import React from 'React';
import { Col, Row, Container } from 'react-bootstrap';
import moment from 'moment';

function Watered() {

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <p>Last Watered : </p>
        </Col>
        <Col>
          {moment().format("MMM Do YY")}
        </Col>
      </Row>
    </Container>
  )
};

export default Watered;