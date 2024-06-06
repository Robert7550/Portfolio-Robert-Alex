import React from 'react';
import './Home.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1 className="title">Robert Alex</h1>
          <p className="subtitle"> I am a Web Developer</p>

            <a href="https://github.com/Robert7550/">
              <i class="fa-brands fa-github git"></i>
            </a>
            <a href="https://www.linkedin.com/in/robertalexp4506/">
              <i class="fa-brands fa-linkedin linkedin" ></i>
            </a>
            
        </div>
      </div>

      <div className='img-section'>
        <img src='https://img.freepik.com/premium-photo/drawing-style-3d-cartoon-cute-boy-computer_630102-1040.jpg?w=740' alt='web developer' />
      </div>
    </section>
  );
};

export default Hero;
