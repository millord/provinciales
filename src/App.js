import React from "react";
import ProvincialesMap from "./components/ProvincialesMap ";
import Navbar from "./components/Navbar";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mapa" component={ProvincialesMap} />
      </Switch>
    </div>
  );
};

export default App;
