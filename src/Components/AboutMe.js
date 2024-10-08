import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './AboutMe.css';
import mob from '../assets/img/mob2.svg';
import cv from '../assets/font/Luis-Castañeda-Vega-.pdf';

export const AboutMe = () => {
  const downloadCV = () => {
    window.open(cv, '_blank');
  };

  return (
    <section id="about-me" className="about-me">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={mob} alt="Perfil" className="img-fluid rounded-circle" loading="lazy" />
          </Col>
          <Col xs={12} md={6}>
            <div className="about-me-text">
              <h2>I`m LuisCV</h2>
              <p>
                I`m a frontend developer.
              </p>
              <div className="icon-dw">
                <button onClick={downloadCV} className="btn-download-cv">Download CV</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
