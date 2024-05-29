import React from 'react';
import './Project.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';



const Projects = () => {
  const projects = [
    {
      title: 'Titan-Fitness',
      image: 'https://cdn.newswire.com/files/x/c9/ed/06697511b238267b6a39b80729f7.jpg',
      description: 'This website is responsive website developed using React.JS ',
      github: '',
      linkedin: '#'
    },
    // {
    //   title: 'Project Two',
    //   image: 'https://via.placeholder.com/300',
    //   description: 'This is a brief description of Project Two.',
    //   github: '#',
    //   linkedin: '#'
    // },
    // {
    //   title: 'Project Three',
    //   image: 'https://via.placeholder.com/300',
    //   description: 'This is a brief description of Project Three.',
    //   github: '#',
    //   linkedin: '#'
    // },
    // Add more projects as needed
  ];

  return (
    
    <section className="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-content">
                
                <a href='https://titan-fit.vercel.app/'>
                    <img src={project.image} alt={project.title} className="project-image" />
                </a>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-icons">
                  <a href={project.github} className="project-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.linkedin} className="project-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
