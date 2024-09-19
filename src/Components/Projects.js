import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css'; // Añadiremos los estilos en Projects.css

const projects = [
  {
    title: 'Project - Clone Netflix',
    description: 'Clon_Netflix_React',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2FClone-Netflix-min.png?alt=media&token=c39a75b6-ecdc-44dc-b4dc-cef2797dd971', // Placeholder, cambia por la URL de la imagen
  },
  {
    title: 'Project - Ecommerce',
    description: 'Description for project 2',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2FEcommerce-min.png?alt=media&token=b41110d8-b8a9-442b-aa6c-fe74784cdeda',
  },
  {
    title: 'Project - Calculator',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Fcal-sass-min.png?alt=media&token=6fe5bf2e-8228-4b5f-86b6-8875729ca7e9',
  },
  {
    title: 'Project - FB Clone',
    description: 'Clon_Google_Reac',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2FclonFB-min.png?alt=media&token=4686e13b-fac3-4e82-8e6b-da7f0799da67',
  },  
  {
    title: 'Project - Clone Google',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Fclone-google-min.png?alt=media&token=df038956-a42a-431b-bcf8-3ed5ec7b0212',
  },  
  {
    title: 'Project - Hacienda Montalván',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Flanding-hacienda-min.png?alt=media&token=2cc1ea82-d6cd-41f9-bbe1-ff33a9487ba1',
  },
  {
    title: 'Project - Rock, Paper, Scissors',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Fp1-min.png?alt=media&token=60abffc0-037b-4a87-910a-7d3f42b898d4',
  },
  {
    title: 'LANDNG PAGE RE ZERO',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Fp2-min.png?alt=media&token=fddb9f62-399b-4666-ad08-3f6db7c563d9',
  },  
  {
    title: 'Project - Login',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Fp4-min.png?alt=media&token=0f15dcc2-e941-4dfa-8ea8-37b1b2d64c03',
  },  
  {
    title: 'Project - Calculator',
    description: 'Description for project 3',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/login-89b46.appspot.com/o/IMGcompress%2Fp5-min.png?alt=media&token=f8c4985e-208a-401b-95cb-a09d90963e0b',
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
