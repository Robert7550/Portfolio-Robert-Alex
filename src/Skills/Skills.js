import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', image: 'https://th.bing.com/th?q=HTML+Logo+in+Black+BG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'},
    { name: 'CSS', image: 'https://www.codju.com/images/Simple-Cloud-Data-Connection-Technology-Logo-3.png'},
    { name: 'JavaScript', image: 'https://th.bing.com/th/id/OIP.3-Ih1g_oGiCXJN_bgcYfgQHaHa?rs=1&pid=ImgDetMain' },
    { name: 'React', image: 'https://th.bing.com/th/id/OIP.rdDJbj2fgaC3NmjAfF_FlwHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.2' },
    { name: 'BootStrap', image: 'https://www.kindpng.com/picc/m/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png' },
    { name: 'Python', image: 'https://juststickers.in/wp-content/uploads/2013/06/Python.jpg' },
    { name: 'Django', image: 'https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png' },
    { name: 'SQL', image: 'https://th.bing.com/th/id/OIP.LW00tC99g8MB-WKADF3PmgAAAA?rs=1&pid=ImgDetMain' },
    { name: 'GitHub', image: 'https://logodix.com/logo/952890.png' },


    // Add more skills as needed
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-content">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
