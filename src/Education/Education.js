import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2 className="title">Education</h2>
        
        <div className="education-item">
          <div className="education-content">
            <h3 className="degree">Bachelor of Science in Computer Science</h3>
            <p className="institution">University of Example</p>
            <p className="year">2015 - 2019</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-content">
            <h3 className="degree">Master of Science in Software Engineering</h3>
            <p className="institution">Institute of Advanced Studies</p>
            <p className="year">2019 - 2021</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-content">
            <h3 className="degree">Bachelor of Science in Computer Science</h3>
            <p className="institution">University of Example</p>
            <p className="year">2015 - 2019</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
