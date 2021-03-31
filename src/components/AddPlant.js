import React, { useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap';
import AddModal from './AddModal';
// import 'bootstrap/dist/css/bootstrap.min.css';


function AddPlant() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <div>

    <Container>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Plant
      </Button>
          <AddModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default AddPlant;