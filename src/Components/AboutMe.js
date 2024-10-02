import { Container, Row, Col } from "react-bootstrap";
import './AboutMe.css';
import mob from '../assets/img/mob2.svg';

export const AboutMe = () => {
  const downloadCV = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/Pdfs%2FLuis-Casta%C3%B1eda-Vega-.pdf?alt=media&token=ee3ccc69-fbc8-41bd-bddd-80a6d67b38b2', '_blank');
  };

  return (
    <section id="about-me" className="about-me">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={mob} alt="Profile" className="img-fluid rounded-circle"/>
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
}
