import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

const serviceID = process.env.REACT_APP_MY_SERVICE_ID
const templateID = process.env.REACT_APP_MY_TEMPLATE_ID
const userID = process.env.REACT_APP_MY_USER_ID

const ContactMe = () => {

  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };

  return (
    <div className = 'contactMeContainer' id='contactme'>
      <h1>Contact me below!</h1>
      <div className = 'contactMeFormDiv'>
        <form ref={form} onSubmit={sendEmail}className ='contactMeForm'>
          <input type="text" name="user_name" placeholder ='Name'/>
          <input type="email" name="user_email" placeholder ='Email'/>
          <textarea name="message" placeholder ='Message'/>
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className = 'socialMediaIcons'>
        <a href ='https://www.linkedin.com/in/epeng1994/'><img src = './assets/Linkedin.png' className = 'contactMeIcons' alt='linkedin'/></a>
        <a href ='https://github.com/Epeng1994'><img src = './assets/GITHUB.png' className = 'contactMeIcons' alt='github'/></a>
        <a href ='https://docs.google.com/document/d/1Hyj8rdMRuDayrAAQ3DPh-gB7g_R8cjuyp9PXuCqjOKQ/edit?usp=sharing'><img src = './assets/RESUME.png' className = 'contactMeIcons' alt='resume'/></a>
      </div>
    </div>

  );
};
 
export default ContactMe;