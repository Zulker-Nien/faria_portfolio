import React from "react";
import "./Home.scss";
import { useMediaQuery } from "react-responsive";
const TopPart = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px)" });
  return (
    <>
      {!isTabletOrMobile ? (
        <>
        <div>
          <div className="holder">
            <div className="kaleido">
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
            </div>
          </div>

          <svg className="hidden">
            <clipPath id="equitri" clipPathUnits="objectBoundingBox">
              <polygon points=".5 0, 0 1.7, 1 1.7, .5 0" />
            </clipPath>
          </svg>
          </div>
        </>
      ) : (
        <>
        <div>
          <div className="holder">
            <div className="kaleido">
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
              <div className="tile"></div>
              <div className="tileE"></div>
            </div>
          </div>

          <svg className="hidden">
            <clipPath id="equitri" clipPathUnits="objectBoundingBox">
              <polygon points=".5 0, 0 0.4, 1 0.4, .5 0" />
            </clipPath>
          </svg>
          </div>
        </>
      )}
    </>
  );
};

export default TopPart;
