import React, { useState, useEffect } from 'react';
import { Button, Modal, Col, Row, Container, Form } from 'react-bootstrap';
const axios = require('axios');
// import 'bootstrap/dist/css/bootstrap.min.css';


function AddModal(props) {

  const [imgContainer, setImgContainer] = useState('');
  const [photos, setPhotos] = useState('');
  const [photosToggle, setPhotosToggle] = useState(false);
  const [name, setName] = useState('');
  const [water, setWater] = useState('');
  const [sun, setSun] = useState('');


  const addPhoto = (e) => {
    e.preventDefault();
    if (imgContainer.length) {
      // const photosArray = photos;
      // photosArray.push(imgContainer);
      setPhotos(imgContainer);
      setPhotosToggle(true);
      setImgContainer('');
    } else {
      alert('Please upload a valid image url');
    }
  };

  const addPlant = () => {
    const obj = {
      name,
      water,
      sun,
      photo: photos
    }
    axios.post('http://localhost:3000/plants', obj)
      .then(() => props.getAll())
      .then(() => props.onHide())
      .catch((err) => console.log(err))
  }

  // useEffect(() => {
  //   addPlant();
  // }, []);

  const handleWater = (e) => {
    setWater(e.target.value)
  };

  const handleSun = (e) => {
    setSun(e.target.value)
  };
  const handleName = (e) => {
    setName(e.target.value)
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
                    onChange={(e) => handleName(e)}
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" size="sm" onChange={(e) => handleWater(e)}>
                    <option value="water">Water Needs</option>
                    <option value="Once a Day">Once a Day</option>
                    <option value="Every Other Day">Every Other Day</option>
                    <option value="Twice a Week">Twice a Week</option>
                    <option value="Once a Week">Once a Week</option>
                    <option value="Bi Weekly">Bi Weekly</option>
                    <option value="Once a Month">Once a Month</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" size="sm" onChange={(e) => handleSun(e)}>
                    <option value="Sun">Sunlight Needs</option>
                    <option value="Full Sun">Full Sun ~ At least 6 hours direct sunlight</option>
                    <option value="Part Sun">Part Sun ~ Between 3 and 6 hours direct sunlight</option>
                    <option value="Part Shade">Part Shade ~ Between 3 and 6 hours direct, shade mid day</option>
                    <option value="Full Shade">Full Shade ~ Less than 3 hours per day</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Photo</Form.Label>
                  <Form.Control type="" value={imgContainer} placeholder="Paste image url here" onChange={(e) => setImgContainer(e.target.value)} />

                  {photos.length ? <img className="upload-img" alt="" src={photos} /> : null}
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
          <Button onClick={() => addPlant()}>Add</Button>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default AddModal;