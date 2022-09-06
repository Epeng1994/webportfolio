import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


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
    <div className = 'contactMeContainer'>
        <form ref={form} onSubmit={sendEmail}className ='contactMeForm'>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    </div>

  );
};
 
export default ContactMe;