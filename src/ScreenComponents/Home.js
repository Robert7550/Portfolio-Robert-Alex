import React from 'react';
import './Home.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1 className="title">Robert Alex</h1>
          <p className="subtitle"> I am a Web Developer</p>
        </div>
      </div>

      <div className='img-section'>
        <img src='https://img.freepik.com/premium-photo/drawing-style-3d-cartoon-cute-boy-computer_630102-1040.jpg?w=740' alt='web developer' />
      </div>
    </section>
  );
};

export default Hero;
