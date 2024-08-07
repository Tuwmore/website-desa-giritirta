
import React from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh
import trash from "../../Assets/trash.png"
import "./reusableStyle.css";

const ThumbnailAdmin = ({ imageUrl, title, description }) => { //variable digunakan nanti saat dinamis
  return (
    <Card className="mb-3" style={containerStyle}>
      <Row className="no-gutters">
        <Col md={4}>
          <Card.Img src={imageUrl} />
        </Col>
        <Col md={5}>
          <Card.Body style={textCard}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Col>
        <Col md={3} className="d-flex align-items-center justify-content-center">
          <Button variant="outline-light">
            <Image src= {trash} className='custom-card-img'/>
          </Button>
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

export default ThumbnailAdmin;
