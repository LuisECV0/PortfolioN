import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import './NavBar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">  
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutMe" className={activeLink === 'AboutMe' ? 'active navbar-link' : 'navBar-link'} onClick={()=>onUpdateActiveLink('aboutme')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navBar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navBar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>

              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navBar-link'}onClick={()=>onUpdateActiveLink('contact')}>Contact</Nav.Link>
              

            </Nav>
            <span className="navbar-text">
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
            
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}