import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';
import { FaJsSquare, FaPython, FaPhp, FaBootstrap, FaSass, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiCsharp, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaSass />, name: 'Sass' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiCsharp />, name: 'C#' },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="text-center">My Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="skill-item">
              <div className="icon-container">
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
