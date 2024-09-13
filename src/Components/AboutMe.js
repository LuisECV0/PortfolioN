import { Container, Row, Col } from "react-bootstrap"; // Importa una imagen de perfil
import './AboutMe.css'
import banner from '../assets/img/banner-bg.png';
export const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={banner} alt="Profile" className="img-fluid rounded-circle"/>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-me-text">
              <h2>Sobre Mí</h2>
              <p>
                ¡Hola! Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras.
                Tengo experiencia en desarrollo web y siempre estoy buscando aprender algo nuevo. 
                Disfruto trabajar en proyectos colaborativos y enfrentar nuevos desafíos.
              </p>
              <a href="#contact" className="btn btn-primary">Contáctame</a>
              <a href="#contact" className="btn btn-primary">Download CV</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
