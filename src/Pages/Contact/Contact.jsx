import React, { useEffect } from "react";
import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div style={{ marginTop: "10vh" }}>
      <div className="contactContainer">
        <div className="contactLeft">
          <div
            className="boxLeft"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          ></div>
        </div>
        <div className="contactRight">
          <div
            className="boxRight"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          ></div>
        </div>
        <div
          className="contactContents"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <a href="mailto:fariazohora31@gmail.com">Send me a mail.</a>

          <a href="tel:+8801888799003">Call Me.</a>
          <h3>Or</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
