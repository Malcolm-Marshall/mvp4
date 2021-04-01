import React, { useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap';
import AddModal from './AddModal';
// import 'bootstrap/dist/css/bootstrap.min.css';


function AddPlant({ getAll }) {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <div>

    <Container>
      <Row>
        <Col>
          <Button variant="btn btn-outline-success" className="float-right" onClick={() => setModalShow(true)}>
            Add
      </Button>
          <AddModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            getAll={getAll}
          />
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default AddPlant;