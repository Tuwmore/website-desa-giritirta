// Done

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './reusableStyle.css';

const Footer = () => {
  return (
    <Container fluid className="background-image-container">
      <Row>
        <Col className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
