import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="text-content">
          <h2 className="title">About Me</h2>
          <p className="description">
            Hello! Robert Alex, a passionate web developer based in India. 
            I have a knack for creating visually appealing and user-friendly websites. 
            My expertise lies in front-end development, UI/UX design, and a bit of backend work.
          </p>

          {/* <li><a href='#'></a></li> */}

        </div>
        <div className="image-content">
          <img src="images/robert.jpg" alt="About Me" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
