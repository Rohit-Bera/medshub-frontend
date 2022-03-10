import React from "react";
import Home from "./Home";
import "../style/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Brandprod from "./components/Brandprod";
import Accountdetails from "./Accountdetails";
// import yourAccount from "./components/Youraccount";
import Help from "./Help";
import About from "./About";
import Myorders from "./Myorder";
import mywishlist from "./Mywishlist";
import notification from "./Mynotification";
import Signin from "./Signin";
import Signup from "./Signup";
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
import Ourbrands from "./Ourbrands";
import admin from "../Admin/Admin.Home";
import ManageProduct from "../Admin/Products";
import ManageOrder from "../Admin/Admin.Order";
import ManagePrescription from "../Admin/Prescription";
import ManageMedicine from "../Admin/Admin.Medicine";
import CheckUser from "./CheckUser";
import Cart from "./Cart";
import Uploadprescription from "./Uploadprescription";
import Searchproduct from "./Searchproduct";
import Searchmedicine from "./Searchmedicine";
import AboutViz from "./AboutViz";
import HelpViz from "./HelpViz";
import ProductOrder from "../Admin/Admin-product-order";
import MedicineOrder from "../Admin/Admin-medicine-order";
import NotDeliverMedicine from "../Admin/NotDeliverMedicineOrder";
import NotDeliberProduct from "../Admin/NotDeliverProductOrder";
import AllUsers from "../Admin/Users";
import updateProfile from "../components/updateProfile";
import AdminFeedback from "../Admin/Admin.Feedback";
import ResetPassword from "./Resetpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            component={Accountdetails}
          />
          {/* Admin Routes */}
          <Route path="/ADmIn/adminHome" exact component={admin} />
          <Route path="/ADmIn/ManageProducts" exact component={ManageProduct} />
          <Route path="/ADmIn/ManageOrder" exact component={ManageOrder} />
          <Route path="/ADmIn/ProductOrder" exact component={ProductOrder} />
          <Route
            path="/ADmIn/ProductOrder/NotDeliverdProd"
            exact
            component={NotDeliberProduct}
          />
          <Route path="/ADmIn/medicineOrder" exact component={MedicineOrder} />
          <Route
            path="/ADmIn/medicineOrder/NotDeliverdMed"
            exact
            component={NotDeliverMedicine}
          />
          <Route path="/ADmIn/allUSers" exact component={AllUsers} />
          <Route path="/ADmIn/AdminFeedback" exact component={AdminFeedback} />

          <Route
            path="/ADmIn/ManageMedicine"
            exact
            component={ManageMedicine}
          />
          <Route
            path="/ADmIn/ManagePrescription"
            exact
            component={ManagePrescription}
          />

          {/* <Route 
          path="/yourAccount" 
          exact
          component={yourAccount}/> */}
          <Route path="/yourAccount/Help" exact component={Help} />
          <Route path="/yourAccount/About" exact component={About} />
          <Route path="/yourAccount/myOrders" exact component={Myorders} />
          <Route path="/yourAccount/MyWishlist" exact component={mywishlist} />
          <Route path="/yourAccount/myCart" exact component={Cart} />

          <Route
            path="/yourAccount/notification"
            exact
            component={notification}
          />
          <Route path="/signin" exact component={Signin} />
          <Route path="/reset-password" exact component={ResetPassword} />

          <Route path="/signup" exact component={Signup} />
          <Route path="/updateProfile" exact component={updateProfile} />

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
          <Route path="/medicines/viewmedcines" exact component={Viewmed} />
          <Route
            path="/uploadprescription"
            exact
            component={Uploadprescription}
          />
          <Route path="/searchproducts" exaact component={Searchproduct} />
          <Route path="/searchmedicines" exaact component={Searchmedicine} />
          <Route path="/about" exact component={AboutViz} />
          <Route path="/help" exact component={HelpViz} />

          {/* test */}
          <Route path="/checkuser" exact component={CheckUser} />

          {/* error route */}
          <Route exact component={Error404} />
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
};

export default App;
