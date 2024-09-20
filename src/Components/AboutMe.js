import { Container, Row, Col } from "react-bootstrap"; // Importa una imagen de perfil
import './AboutMe.css'
import mob from '../assets/img/mob2.svg';
export const AboutMe = () => {
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
              I`m developer frontend.
              </p>
              <div className="icon-dw">
                <a href="#projects">Download CV</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
