import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="title">Contact Me</h2>
          <p className="description">I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message below.</p>
          <form className="contact-form">
            <input type="text" className="form-input" placeholder="Your Name" required />
            <input type="email" className="form-input" placeholder="Your Email" required />
            <textarea className="form-textarea" placeholder="Your Message" required></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src="https://img.freepik.com/premium-photo/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_1036687-26022.jpg?size=626&ext=jpg&ga=GA1.1.802376354.1716454865&semt=ais_user" alt="Contact" className="contact-image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
