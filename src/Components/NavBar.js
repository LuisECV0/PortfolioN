import { useEffect, useState } from "react";
import {NavBar, Container} from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []); 
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
                <img src={""} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">  
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="navBar-text">
                <div className="soccial-icon">
                    <a href="#"><img src={''} alt="" /></a>
                    <a href="#"><img src={''} alt="" /></a>
                    <a href="#"><img src={''} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let is connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}