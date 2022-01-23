import React from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ourbrands from "./components/Ourbrands";

// import Brandprod from "./components/Brandprod";
import Accountdetails from "./components/Accountdetails";
// import yourAccount from "./components/Youraccount";
import Help from "./components/Help";
import About from "./components/About";
import Myorders from "./components/Myorder";
import mywishlist from "./components/Mywishlist";
import notification from "./components/Mynotification";
import Signin  from "./components/Signin";
import Signup from "./components/Signup";
import Dabur from "./components/Dabur";
import Dettol from "./components/Dettol";
import Garnier from "./components/Garnier";
import Himalya from "./components/Himalya";
import Mamaearth from "./components/Mamaearth";
import Muscleblaze from "./components/Muscleblaze";
import Zandu from "./components/Zandu";
import Beautyprod from "./components/Beautyprod";
import Facialcare from "./components/Facialcare";
import Haircare from "./components/Haircare";
import Lipcare from "./components/Lipcare";
import Bodycare from "./components/Bodycare";
import Mensgroom from "./components/Mensgroom";
import Beardoil from "./components/Beardoil";
import Beardwash from "./components/Beardwash";
import Hairgel from "./components/Hairgel";
import Mendeo from "./components/Mendeo";
import Error404 from "./components/Error404";
import Covid from "./components/Covid";
import Device from "./components/Device";
import Momandbaby from "./components/Momandbaby";
import Viewprod from "./components/Viewprod";
import Medicine from "./components/Medicine";
import Viewmed from "./components/Viewmed";
import Medslist from "./components/Medslist";


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
          {/* brand products */}
          <Route
            path="/productCategories/Brandproducts/dabur"
            exact
            component={Dabur}
          />
          <Route
            path="/productCategories/Brandproducts/dettol"
            exact
            component={Dettol}
          />
          <Route
            path="/productCategories/Brandproducts/garnier"
            exact
            component={Garnier}
          />
          <Route
            path="/productCategories/Brandproducts/himalya"
            exact
            component={Himalya}
          />
          <Route
            path="/productCategories/Brandproducts/mamaearth"
            exact
            component={Mamaearth}
          />
          <Route
            path="/productCategories/Brandproducts/muscleblaze"
            exact
            component={Muscleblaze}
          />
          <Route
            path="/productCategories/Brandproducts/zandu"
            exact
            component={Zandu}
          />
          {/* beauty prod */}
          <Route
            path="/productCategories/Beautyproducts"
            exact
            component={Beautyprod}
          />
          <Route
            path="/productCategories/Beautyproducts/facialkit"
            exact
            component={Facialcare}
          />
          <Route
            path="/productCategories/Beautyproducts/haircare"
            exact
            component={Haircare}
          />
          <Route
            path="/productCategories/Beautyproducts/lipcare"
            exact
            component={Lipcare}
          />
          <Route
            path="/productCategories/Beautyproducts/bodycare"
            exact
            component={Bodycare}
          />
          {/* mensgrooming */}
          <Route
            path="/productCategories/Men'sgrooming"
            exact
            component={Mensgroom}
          />
          <Route
            path="/productCategories/Men'sgrooming/beardoil"
            exact
            component={Beardoil}
          />
          <Route
            path="/productCategories/Men'sgrooming/beardwash"
            exact
            component={Beardwash}
          />
          <Route
            path="/productCategories/Men'sgrooming/hairgel"
            exact
            component={Hairgel}
          />
          <Route
            path="/productCategories/Men'sgrooming/mendeo"
            exact
            component={Mendeo}
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

          <Route
            path="/productCategories/covid-essentials"
            exact
            component={Covid}
          />
          <Route path="/productCategories/devices" exact component={Device} />
          <Route
            path="/productCategories/momandbabies"
            exact
            component={Momandbaby}
          />
          <Route
            path="/productCategories/Brandproducts/fitness"
            exact
            component={Muscleblaze}
          />
          <Route path="/viewproduct" exact component={Viewprod} />
          {/* meds route */}
          <Route path="/medicines" exact component={Medicine} />
          <Route path="/medicines/medicinelist" exact component={Medslist} />
          <Route path="/medicines/viewmedcines" exact component={Viewmed} />

          {/* error route */}
          <Route exact component={Error404} />

        </Switch>
      </Router>
    </>
  );
};

export default App;
