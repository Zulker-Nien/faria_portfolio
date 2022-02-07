import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Store from "../../Store/store";
import "./Company.scss";
import ReadMore from "./ReadMore";
const Company = (props) => {
  const store = useContext(Store);
  const { readMore, setReadMore, description, setDescription } = store;

  const handleClick = () => {
    setReadMore();
    setDescription(props.List.description);
  };

  return (
    <>
      <div className="CompanyContainer">
        <div className="CompanyLeft">
          <h1>{props.List.title}</h1>
          <h2>Role: {props.List.subtitle}</h2>
          <h3 onClick={handleClick}>Read More</h3>
        </div>
        <div className="CompanyRight">
          <img src={props.List.img} />
        </div>
      </div>
      {readMore && <ReadMore desc={description} />}
    </>
  );
};

export default observer(Company);
