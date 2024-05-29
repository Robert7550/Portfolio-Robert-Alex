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
          <img src="https://img.freepik.com/free-vector/online-games-addiction-concept-illustration_114360-1994.jpg?t=st=1716960330~exp=1716963930~hmac=125917ab5361e3aad8634912c005d0556dcf8c53f189d4dd64740dcd309dc067&w=740" alt="About Me" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
