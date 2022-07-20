import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className="footer">
    <Container>
        <Row>
            <Col xs lg="4">
                <p>Audio and subtitles</p>
                <p>Media center</p>
                <p>Security</p>
            </Col>
            <Col xs lg="4">
                <p>Help center</p>
                <p>Careers</p>
                <p>Cookie preferences</p>
            </Col>
            <Col xs lg="4">
                <p>Voucher claim</p>
                <p>Term of use</p>
                <p>Contact us</p>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Footer;