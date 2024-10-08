import React from 'react';
import { FaGithub } from 'react-icons/fa';
//import { FaExternalLinkAlt } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: 'Project - Hacienda Montalván',
    description: 'Description for project 3',
    imgUrl: 'https://i.ibb.co/Z23D6PC/landing-hacienda-min.png',
    gitUrl: 'https://github.com/LuisECV0/landing-hacienda-montalban',  
  },
  {
    title: 'Project - Clone Netflix',
    description: 'Clon_Netflix_React',
    imgUrl: 'https://i.ibb.co/2hQS8H5/Clone-Netflix-min.png',
    gitUrl: 'https://github.com/LuisECV0/Clone-Netflix',
  },
  {
    title: 'Project - Clone Google',
    description: 'Description for project 3',
    imgUrl: 'https://i.ibb.co/QdWLjCg/clone-google-min.png',
    gitUrl: 'https://github.com/LuisECV0/Google-Cln',
  }, 
  {
    title: 'Project - Ecommerce',
    description: 'Description for project 2',
    imgUrl: 'https://i.ibb.co/bFHD5VL/Ecommerce-min.png',
    gitUrl: 'https://github.com/LuisECV0/projectEcommerce',
  },
  {
    title: 'Project - Calculator',
    description: 'Description for project 3',
    imgUrl: 'https://i.ibb.co/pRCXygX/cal-sass-min.png',
    gitUrl: 'https://github.com/LuisECV0/calculadoraSAS',
  },
  {
    title: 'Project - FB Clone',
    description: 'Clon_Google_Reac',
    imgUrl: 'https://i.ibb.co/HVyGrBS/clon-FB-min.png',
    gitUrl: 'https://github.com/LuisECV0/clonFB',
  },   
  {
    title: 'Project - Rock, Paper, Scissors',
    description: 'Description for project 3',
    imgUrl: 'https://i.ibb.co/hWVrMr1/p1-min.png',
    gitUrl: 'https://github.com/LuisECV0/Piedra-papel-tijera',
  },
  {
    title: 'LANDNG PAGE RE ZERO',
    description: 'Description for project 3',
    imgUrl: 'https://i.ibb.co/GPxCHRX/p2-min.png',
    gitUrl: 'https://github.com/LuisECV0/landing-page',
  },  
  {
    title: 'Project - Login',
    description: 'Description for project 3',
    imgUrl: 'https://i.ibb.co/KxP5FXQ/p4-min.png',
    gitUrl: 'https://github.com/LuisECV0/login-php',
  },  

];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A collection of projects showcasing my skills and expertise.
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-col">
              <Card className="project-card">
                <div className="project-image-wrapper">
                  <Card.Img variant="top" src={project.imgUrl} alt={project.title} />
                  <div className="icon-overlay">
                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="project-icon github-icon" />
                    </a>
                    {/** 
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="project-icon link-icon" />
                    </a>
                    */}
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
