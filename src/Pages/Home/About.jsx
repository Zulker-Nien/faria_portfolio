import React, { useEffect } from "react";
import "./Home.scss";
import face from "./face.png";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="aboutContainer">
      <img
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        src={face}
      />
      <h2
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        A small town girl with an interest in solving problems and coming up
        with simple yet efficient solutions. This lead me to study computer
        science and train myself to be a programmer or a developer. Currently I
        am looking for knowledge and experience to further nourish my skillset
        so I can take my career to the next level.
      </h2>
    </div>
  );
};

export default About;
