import React from 'react';
import './Home.css';

const Hero = () => {

  const PDF_FILE_URL = '/resume/Robert Alex-Front end developer-Resume.pdf'
  
  const downloadFileAtURL = (url) =>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a');
    aTag.href=url
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
  }


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

            <br/>

            <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}  type='button' className='resume-button' data-download="Robert Alex-Front end developer-Resume.pdf">Resume</button>
            
        </div>
      </div>

      <div className='img-section'>
        <img src='https://img.freepik.com/premium-photo/drawing-style-3d-cartoon-cute-boy-computer_630102-1040.jpg?w=740' alt='web developer' />
      </div>
    </section>
  );
};

export default Hero;
