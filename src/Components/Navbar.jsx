import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "./Logo.png";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px)" });
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      {!isTabletOrMobile ? (
        <div className="NavbarContainer">
          {/* Logo */}
          <div className="Logo">
            <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <img src={Logo} />
            </NavLink>
          </div>
          {/* Items */}
          <div className="NavbarItems">
            <ul>
              <li><NavLink
                  to="/experience"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Experience
                </NavLink></li>
              <li>
                <NavLink
                  to="/training"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Training
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/thoughts"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Thoughts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="MobNavContainer">
            <div className="burger" onClick={handleClick}>
              <div className={nav ? "close" : "lines"}></div>
              <div className={nav ? "" : "lines"}></div>
              <div className={nav ? "" : "lines"}></div>
            </div>
          </div>
          {nav && (
            <div className="MobNavOpen">
              <div className="LogoMob">
                <img src={Logo} />
              </div>
              <div className="NavbarItemsMob">
                <ul>
                  <li>Experience</li>
                  <li>Education</li>
                  <li>Training</li>
                  <li>Thoughts</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
