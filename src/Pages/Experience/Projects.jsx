import React, { useEffect } from "react";
import "./Projects.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import One from "./images/1.png";
import Two from "./images/2.png";
import Three from "./images/3.png";
import Four from "./images/4.png";
import Five from "./images/5.png";
import Seven from "./images/7.png";
import Eight from "./images/8.png";
import Nine from "./images/9.png";
import Ten from "./images/10.png";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="ProjectContainer">
      <div className="projectHeading">
        <p
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-quad"
          data-aos-duration="600"
        >
          Take a look at some of my projects
        </p>
      </div>
      <div
        className="AllProjects"
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-easing="ease-in-quad"
        data-aos-duration="600"
      >
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={One} />
            </div>
            <p>BLOG</p>
          </div>
          <h2>Minimo</h2>
        </div>
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Two} />
            </div>
            <p>BUSINESS</p>
          </div>
          <h2>UiBrush</h2>
        </div>
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Three} />
            </div>
            <p>CREATIVE TECHNOLOGY</p>
          </div>
          <h2>Cerulean</h2>
        </div>
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Four} />
            </div>
            <p>Photography</p>
          </div>
          <h2>Creative Studios</h2>
        </div>
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Five} />
            </div>
            <p>Tourism</p>
          </div>
          <h2>Desh Bhromon</h2>
        </div>
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Seven} />
            </div>
            <p>Call To Action</p>
          </div>
          <h2>Strict</h2>
        </div>
        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Eight} />
            </div>
            <p>Error Page</p>
          </div>
          <h2>404 Page</h2>
        </div>

        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Ten} />
            </div>
            <p>E-Commerce</p>
          </div>
          <h2>Celestial First Draft</h2>
        </div>

        <div className="project">
          <div className="p">
            <div className="b">
              <img src={Nine} />
            </div>
            <p>My Start</p>
          </div>
          <h2>My First Portfolio</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
