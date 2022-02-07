import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

const HomeFooter = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="HFContainer">
      <div
        className="HFWrapper"
        data-aos="fade-in"
        data-aos-offset="120"
        data-aos-easing="ease-in-quad"
        data-aos-duration="400"
      >
        <div className="copyright">
          <p>
            Copyright <AiOutlineCopyrightCircle /> by Faria Tuz Zohora
          </p>
        </div>
        <div className="social">
          <AiFillLinkedin />
          <AiFillFacebook />
          <AiFillGithub />
          <AiFillInstagram />
        </div>
        <div className="PDF">
          <p>
            <a href="https://drive.google.com/file/d/13p0zVe0pQ0ClJ1g6otiHXHGx07mzEJtB/view?usp=sharing" style={{textDecoration:"none", color:"#fff"}}>
              Download My CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
