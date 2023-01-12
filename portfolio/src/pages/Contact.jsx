import React, { useRef } from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Let's Get In Touch</h3>
      <img src="/images/contact.png" alt="" />
      <div className="contact-wrapper">
        <a href="mailto:izh.nir@gmail.com">
          <div className="cont">
            <i class="fa-solid fa-envelope"></i> <br />
            <span>izh.nir@gmail.com</span>
          </div>
        </a>
        <a href="tel:053-830-7857">
          <div className="cont">
            <i class="fa-solid fa-mobile-screen-button"></i> <br />
            <span>0538307857</span>
          </div>
        </a>
      </div>
      <a href="/files/Nir_Izhak_CV.pdf" download className="down-button">
      <div className="cv-wrapper">
      <i class="fa-regular fa-circle-user"></i>
      <br />
      <span>View CV</span>
      </div>
      </a>

    </div>
  );
};
export default Contact;
