import React from "react";
import Home from "./Home";
import "../style/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ourbrands from "./Ourbrands";
import Dabur from "./Dabur";
import Dettol from "./Dettol";
import Garnier from "./Garnier";
import Himalya from "./Himalya";
import Mamaearth from "./Mamaearth";
import Muscleblaze from "./Muscleblaze";
import Zandu from "./Zandu";
import Beautyprod from "./Beautyprod";
import Facialcare from "./Facialcare";
import Haircare from "./Haircare";
import Lipcare from "./Lipcare";
import Bodycare from "./Bodycare";
import Mensgroom from "./Mensgroom";
import Beardoil from "./Beardoil";
import Beardwash from "./Beardwash";
import Hairgel from "./Hairgel";
import Mendeo from "./Mendeo";
import Error404 from "./Error404";
import Covid from "./Covid";
import Device from "./Device";
import Momandbaby from "./Momandbaby";
import Viewprod from "./Viewprod";
import Medicine from "./Medicine";
import Viewmed from "./Viewmed";
import Medslist from "./Medslist";

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
