import React from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ourbrands from "./components/Ourbrands";
import Brandprod from "./components/Brandprod";

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/productCategories/ourBrands"
            exact
            component={Ourbrands}
          />
          <Route
            path="/productCategories/Brandproducts"
            exact
            component={Brandprod}
          />
        </Switch>
      </Router>
    </>
  );

};

export default App;
