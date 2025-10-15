
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import "./reuseableStyle.css";

const Thumbnail = ({ imageUrl, title, description }) => { //variable digunakan nanti saat dinamis
  return (
    <Card className="mb-3" style={containerStyle}>
      <Row className="no-gutters">
        <Col md={4}>
          <Card.Img src={imageUrl} style={{borderRadius: "2%"}}/>
        </Col>
        <Col md={5}>
          <Card.Body style={textCard}>
            <Card.Title className='font-judul'>{title}</Card.Title>
            <Card.Text className='font-deskripsi'>{description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

const containerStyle = {
  width: "100%",
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
