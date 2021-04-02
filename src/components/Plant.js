import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import moment from 'moment';
const axios = require('axios');

function Plant({ plant, expiryTimestamp, getAll }) {

  // const [watered, setWatered] = useState(false);

  // useEffect(() => {
  //   setWatered(false);
  // }, [watered]);

  const onDelete = (e) => {
    axios.delete(`http://localhost:3000/plants/${e.target.id}`)
    .then(() => getAll())
    .catch((err) => console.log(err));
  }

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => document.getElementById(plant.name).innerHTML = `<strong><u style="color:red;">${plant.name} needs water!</strong></u>` });

  const waterSeconds = {
    "Once a Day": 86400,
    "Every Other Day": 172800,
    "Once a Week": 604800,
    "Twice a Week": 302400,
    "Bi Weekly": 1209600,
    "Once a Mont": 2419200
  }

  const style = {
    className: 'justify-content-md-right'
  }

  return (
    <Container>
      <Row>
        <Col>
          <h4 id={plant.name}>{plant.name}</h4>
        </Col>
        <Col className="float-right">
          <Button variant="btn btn-info" className="float-right" onClick={() => {
            document.getElementById(plant.name).innerHTML = plant.name
            const time = new Date();
            time.setSeconds(time.getSeconds() + (waterSeconds[plant.water]));
            // time.setSeconds(time.getSeconds() + 5);
            restart(time)
          }}>
            Watered !
          </Button>
        </Col>
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
        <strong>Water: &nbsp;</strong>
        <p>{plant.water}</p>
      </Row>
      <Row>
        <strong>Sun: &nbsp;</strong>
        <p>{plant.sun}</p>
      </Row>
      <Row>
        <strong>Time to Next Water: &nbsp;</strong>
        <div style={{ fontSize: '15px' }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </Row>
      <Row>
        <Col sm="float-right">
          <Button variant="btn btn-outline-primary" size="sm" id={plant.id} onClick={(e) => onDelete(e)}>X</Button>
        </Col>
        &nbsp;
        <Col sm="float-right">
          <Button size="sm" variant="btn btn-outline-info">Edit</Button>
        </Col>
      </Row>
      <hr></hr>
    </Container>
  )
};

export default Plant;