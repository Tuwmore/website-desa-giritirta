//Done for now

import React from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh
import "./reusableStyle.css";

const Thumbnail = ({ imageUrl, title, description }) => { //variable digunakan nanti saat dinamis
  return (
    <Card className="mb-3" style={containerStyle}>
      <Row className="no-gutters">
        <Col md={4}>
          <Card.Img src={Holder} style={{borderRadius: "2%"}}/>
        </Col>
        <Col md={5}>
          <Card.Body style={textCard}>
            <Card.Title className='font-judul'>Judul</Card.Title>
            <Card.Text className='font-deskripsi'>Deskripsi artikel</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

const containerStyle = {
  width: "90%",
  margin: "0 auto",
  borderRadius: "0",
  border: "none",
}

const textCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
}

export default Thumbnail;
