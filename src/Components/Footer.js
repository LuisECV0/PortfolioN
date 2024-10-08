import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luis-casta%C3%B1eda-vega/">
                <img src={navIcon1} alt="LinkedIn - Luis Castañeda Vega" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100005745138869">
                <img src={navIcon2} alt="Facebook - Luis Castañeda Vega" />
              </a>
              <a href="https://github.com/LuisECV0">
                <img src={navIcon4} alt="Github - Luis Castañeda Vega" />
              </a>
            </div>
            <p>© 2024 Your Company. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
