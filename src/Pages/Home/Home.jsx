import React from "react";
import About from "./About";
import Affiliations from "./Affiliations";
import "./Home.scss";
import HomeFooter from "./HomeFooter";
import Skills from "./Skills";
import TopPart from "./TopPart";

const Home = () => {
  return (
    <div className="forBg">
      <div className="forBG"></div>
      <div className="HomeTopContainer">
        <TopPart />
        <div className="wrapper">
          <div className="typing-demo">hi. I'm Faria.</div>
        </div>
      </div>
      <div className="gap"></div>
      <About />
      <Affiliations/>
      <Skills/>
      <HomeFooter/>
    </div>
  );
};

export default Home;
