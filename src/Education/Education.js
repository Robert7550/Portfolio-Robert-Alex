import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2 className="title">Education</h2>

        
        <div className="education-item">
          <div className="education-content">
            <h3 className="degree">Bachelor of Business Administration</h3>
            <p className="institution">Thiruvalluvar University</p>
            <p className="year">2018 - 2021</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-content">
            <h3 className="degree">HSC</h3>
            <p className="institution">Adaikala Annai Hr Sec School</p>
            <p className="year">2017 - 2018</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-content">
            <h3 className="degree">SSLC</h3>
            <p className="institution">St. Michael’s High School</p>
            <p className="year">2015 - 2016</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
