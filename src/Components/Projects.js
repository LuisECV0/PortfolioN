import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css'; // Añadiremos los estilos en Projects.css

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    imgUrl: 'https://via.placeholder.com/300', // Placeholder, cambia por la URL de la imagen
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    imgUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
    imgUrl: 'https://via.placeholder.com/300',
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
                <Card.Img variant="top" src={project.imgUrl} alt={project.title} />
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
