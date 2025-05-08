import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const data = new Date().toLocaleString();

  return (
   <footer className='footer'>
    <hr/>
  <Container>
        <Row>
            <Col className='card'>
            <p>{data}</p>
            </Col>
            <Col className='card'>
            <h6>Features</h6>
               <ul className="list-unstyled">
              <li>Cool stuff</li>
              <li>Random feature</li>
              <li>Team feature</li>
              <li>Stuff for developers</li>
              <li>Another one</li>
              <li>Last time</li>
            </ul>
            </Col>
            <Col className='card'>
            <h6>Recourses</h6>
               <ul className="list-unstyled">
              <li>Recourse</li>
              <li>Recourse name</li>
              <li>Another recourse</li>
              <li>Final recourse</li>
            </ul>
            </Col>
            <Col className='card'>
            <h6>About</h6>
               <ul className="list-unstyled">
              <li>Team</li>
              <li>Locations</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
            </Col>
        </Row>
      </Container>
   </footer>
    
 
  );
};

export default Footer;
