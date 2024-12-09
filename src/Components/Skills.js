import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';
import { FaJsSquare, FaPython, FaPhp, FaBootstrap, FaSass, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiCplusplus, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, name: 'HTML5' },
    { icon: <FaJsSquare color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <FaPython color="#306998" />, name: 'Python' },
    { icon: <FaPhp color="#787CB5" />, name: 'PHP' },
    { icon: <FaBootstrap color="#563D7C" />, name: 'Bootstrap' },
    { icon: <FaSass color="#C69F8C" />, name: 'Sass' },
    { icon: <FaReact color="#61DBFB" />, name: 'React' },
    { icon: <FaNodeJs color="#8CC84B" />, name: 'Node.js' },
    { icon: <FaGitAlt color="#F34F29" />, name: 'Git' },
    { icon: <FaGithub color="#333" />, name: 'GitHub' },
    { icon: <SiMysql color="#4479A1" />, name: 'MySQL' }, 
    { icon: <SiCplusplus color="#68217A" />, name: 'C#' },
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
