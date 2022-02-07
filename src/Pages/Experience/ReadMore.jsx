import "./readMore.scss";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Store from "../../Store/store";
const ReadMore = (props) => {
  const store = useContext(Store)
  const {setReadMore} = store
  const handleClick = () => {
    setReadMore();
  };
  return (
    <>
      <div className="readMoreContainer">
        <div className="readMore">
          <div className="closeReadMore" onClick={handleClick}><p>Close</p></div>
         
          <h2>{props.desc}</h2>
        </div>
      </div>
    </>
  );
};

export default observer(ReadMore);
