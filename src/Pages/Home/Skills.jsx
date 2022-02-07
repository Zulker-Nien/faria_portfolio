import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="SkillsContainer">
      <div className="Skillstitle">
        <h1
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400"
        >
          Skills
        </h1>
      </div>
      <div className="SkillContents">
        <div className="Python">
          <h1 data-aos="flip-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">PYTHON</h1>
        </div>
        <div className="HTML">
          <h1
          data-aos="flip-up"
          data-aos-offset="210"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">HTML</h1>
        </div>
        <div className="CSS">
          <h1
          data-aos="flip-up"
          data-aos-offset="220"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">CSS</h1>
        </div>
        <div className="BOOTSTRAP">
          <h1
          data-aos="flip-up"
          data-aos-offset="230"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">BOOTSTRAP</h1>
        </div>
        <div className="JAVASCRIPT">
          <h1
          data-aos="flip-up"
          data-aos-offset="240"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">JAVASCRIPT</h1>
        </div>
        <div className="GITHUB">
          <h1
          data-aos="flip-up"
          data-aos-offset="260"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">GITHUB</h1>
        </div>
        <div className="VSCODE">
          <h1
          data-aos="flip-up"
          data-aos-offset="250"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">VS CODE</h1>
        </div>
        <div className="PYCHARM">
          <h1
          data-aos="flip-up"
          data-aos-offset="270"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">PYCHARM</h1>
        </div>
        <div className="GITHUB">
          <h1
          data-aos="flip-up"
          data-aos-offset="280"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">GITHUB</h1>
        </div>
        <div className="RESTAPI">
          <h1
          data-aos="flip-up"
          data-aos-offset="290"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">REST-APIs</h1>
        </div>
        <div className="OFFICE">
          <h1
          data-aos="flip-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">MS OFFICE</h1>
        </div>
        <div className="LEADERSHIP">
          <h1
          data-aos="flip-up"
          data-aos-offset="310"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400">LEADERSHIP</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
