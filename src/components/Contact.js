import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
    .sendForm(
      'service_jn84ky5', 
      'template_smmiurb', 
      form.current, 
      'V_HZExsKK-w65IfSy')
    .then(
      (result) => {
        console.log(result.text);
        console.log(alert('Your message has been sent successfully'))
      }, 
      (error) => {
        console.log(error.text);
        console.log('Error: please try again');
      }
    );
  }  
  
  
  const [buttonText ] = useState('Send');


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No. (Optional)"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6" placeholder="Message" ></textarea>
                      <button type="submit" value="Send" ><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}