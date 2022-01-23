import React from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ourbrands from "./components/Ourbrands";
import Brandprod from "./components/Brandprod";
import Accountdetails from "./components/Accountdetails";
// import yourAccount from "./components/Youraccount";
import Help from "./components/Help";
import About from "./components/About";
import Myorders from "./components/Myorder";
import mywishlist from "./components/Mywishlist";
import notification from "./components/Mynotification";
import Signin  from "./components/Signin";
import Signup from "./components/Signup";

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
          <Route 
          path="/yourAccount/AccountDetails" 
          exact
          component={Accountdetails}/>
          {/* <Route 
          path="/yourAccount" 
          exact
          component={yourAccount}/> */}
          <Route 
          path="/yourAccount/Help" 
          exact
          component={Help}/>
          <Route 
          path="/yourAccount/About" 
          exact
          component={About}/>
          <Route
          path="/yourAccount/myOrders"
          exact
          component={Myorders}/>
          <Route 
          path="/yourAccount/MyWishlist" 
          exact
          component={mywishlist}/>
          <Route 
          path="/yourAccount/notification" 
          exact
          component={notification}/>
          <Route 
          path="/signIn" 
          exact
          component={Signin}/>
          <Route 
          path="/Signup" 
          exact
          component={Signup}/>
        </Switch>
      </Router>
    </>
  );

};

export default App;
