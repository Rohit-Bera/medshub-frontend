import React from "react";
import "./style/Order.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const AdminOrder = () => {
  const history = useHistory();

  const token = useSelector((state) => state.adminReducer).token;
  const name = useSelector((state) => state.adminReducer).name;
  const email = useSelector((state) => state.adminReducer).email;
  const address = useSelector((state) => state.adminReducer).address;
  const phone = useSelector((state) => state.adminReducer).phoneNumber;

  if (
    name === "" ||
    email === "" ||
    address === "" ||
    phone === "" ||
    token === ""
  ) {
    history.push("/signin");
    toast.info("please login first! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="main-order-flex">
          <Link to="/ADmIn/ProductOrder">
            {" "}
            <div className="card-order-main">
              <h3>Product Order</h3>
            </div>
          </Link>
          <Link to="/ADmIn/medicineOrder">
            <div className="card-order-main">
              <h3>Medicine Order</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminOrder;
