import { Container, Row, Col } from "react-bootstrap";
import profileImg from '../assets/img/profile-img.jpg'; // Importa una imagen de perfil

export const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={profileImg} alt="Profile" className="img-fluid rounded-circle"/>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-me-text">
              <h2>Sobre Mí</h2>
              <p>
                ¡Hola! Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras.
                Tengo experiencia en desarrollo web y siempre estoy buscando aprender algo nuevo. 
                Disfruto trabajar en proyectos colaborativos y enfrentar nuevos desafíos.
              </p>
              <p>
                Fuera del trabajo, me encanta explorar las últimas tendencias en tecnología, leer, y dedicar tiempo a la resolución de problemas complejos. 
              </p>
              <a href="#contact" className="btn btn-primary">Contáctame</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
