import React, { useEffect } from "react";
import Title from "./Section1.png";
import Content from "./Section1Content.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Affiliations = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="AffiliationsContainer">
      <div className="title">
        <h1
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-quad"
          data-aos-duration="400"
        >
          Affiliations
        </h1>
      </div>
      <div className="Section1Content" data-aos="fade-left"
          data-aos-offset="800"
          data-aos-easing="ease-in-quad"
          data-aos-duration="700">
        <img
          
          src={Content}
        />
      </div>
    </div>
  );
};

export default Affiliations;
