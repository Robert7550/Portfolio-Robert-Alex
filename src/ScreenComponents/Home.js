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
        <img src='https://img.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg?size=626&ext=jpg&ga=GA1.1.802376354.1716454865&semt=ais_user' alt='web developer' />
      </div>
    </section>
  );
};

export default Hero;
