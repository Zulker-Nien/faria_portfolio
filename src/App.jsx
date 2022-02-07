import React from "react";
import Navbar from "./Components/Navbar";
import "./index.scss"
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Exp from "./Pages/Experience/Exp";
import Training from "./Pages/Training/Training";
import Thoughts from "./Pages/Thoughts/Thoughts";



const App = () => {
  return (
    <div className="mainBG">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/experience" component={Exp} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/thoughts" component={Thoughts} />
      </Switch>
    </div>
  );
};

export default App;
