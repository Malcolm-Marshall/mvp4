import React, { useState } from 'react';
import { Button, Modal, Col, Row, Container, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function AddModal(props) {

  const [imgContainer, setImgContainer] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photosToggle, setPhotosToggle] = useState(false);


  const addPhoto = (e) => {
    e.preventDefault();
    if (imgContainer.length) {
      const photosArray = photos;
      photosArray.push(imgContainer);
      setPhotos(photosArray);
      setPhotosToggle(true);
      setImgContainer('');
    } else {
      alert('Please upload a valid image url');
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tell us what your plant needs to stay happy!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Plant Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Example: Spider Plant"
                    name="name"
                    size="sm"
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" size="sm">
                    <option>Water Needs</option>
                    <option>Once a Day</option>
                    <option>Every Other Day</option>
                    <option>Twice a Week</option>
                    <option>Once a Week</option>
                    <option>Bi Weekly</option>
                    <option>Once a Month</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" size="sm">
                    <option>Sunlight Needs</option>
                    <option>Full Sun ~ At least 6 hours direct sunlight</option>
                    <option>Part Sun ~ Between 3 and 6 hours direct sunlight</option>
                    <option>Part Shade ~ Between 3 and 6 hours direct, shade mid day</option>
                    <option>Full Shade ~ Less than 3 hours per day</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Photo</Form.Label>
                  <Form.Control type="" value={imgContainer} placeholder="Paste image url here" onChange={(e) => setImgContainer(e.target.value)} />

                  {photos.length ? photos.map((photo, i) => <img className="upload-img" key={i} alt="" src={photo} onClick={(e) => removePhoto(e, photo)} />) : null}
                  {(photos.length < 5) ? <Button className="upload-btn" onClick={(e) => addPhoto(e)}>Upload</Button> : null}
                  <style jsx>
                    {`
                img {
                  height: 75px;
                }
            `}
                  </style>
                </Form.Group>
              </Col>
            </Row>
          </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button>Add</Button>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default AddModal;