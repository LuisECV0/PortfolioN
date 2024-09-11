import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
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
/*
    useEffect(()=>{

        return 
    },[])
*/
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
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navBar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navBar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navBar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navBar-text">
                <div className="soccial-icon">
                    <a href="#"><img src={navIcon1} alt="Linkedin" /></a>
                    <a href="#"><img src={navIcon2} alt="Facebook" /></a>
                    <a href="#"><img src={navIcon3} alt="Instagram" /></a>
                </div>
            {/*<button className="vvd" onClick={() => console.log('connect')}><span>Let is connect</span></button>*/}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}