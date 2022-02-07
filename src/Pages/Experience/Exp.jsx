import React, { useState, useEffect } from "react";
import Company from "./Company";
import "./Exp.scss";
import { List } from "./List";
import Projects from "./Projects";


const Exp = () => {
  
  const [titleBg, setNavbarbg] = useState(false);
  const changebg = () => {
    if (window.scrollY >= "15") {
      setNavbarbg(true);
    } else {
      setNavbarbg(false);
    }
  };
  window.addEventListener("scroll", changebg);

  const zoomElement = document.querySelector(".ExpH1");
  let zoom = 2;
  const ZOOM_SPEED = .2;
  document.addEventListener("wheel", function (e) {
    if (titleBg === false) {
      if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      } else {
        if (zoom <= 1) {
          zoomElement.style.transform = `scale(1)`;
        } else {
          zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
        }
      }
    }
  });
  return (
    <>
      <div className="ExpContainer">
        <h1 className="ExpH1">My Experience</h1>
      </div>
      <div className="ExpSections">
        <div className="SectionWrapper">
          {List.map((item, index) => {
            return <Company key={index} List={item} />;
          })}
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Exp;
