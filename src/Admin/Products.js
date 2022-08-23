import React from "react";
import "./style/Product.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getallProductApi,
  addProductApi,
  deleteProductApi,
  updateProductsApi,
} from "../Data/Services/Oneforall";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal/lib/components/Modal";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");

const Product = () => {
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
  //add product state
  const [products, setProducts] = useState({
    productName: "",
    productPrice: null,
    productBrand: "",
    productCategory: "",
    productId: "",
    productDescription: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
    },
  };
  // add img state
  const [Img, setImg] = useState({
    productImage: [],
  });
  //add status state
  const [status, setStatus] = useState({
    availableStatus: "",
  });
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  //all products state
  const [allProducts, setAllProducts] = useState([]);

  //add data
  const inputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProducts({ ...products, [name]: value });
  };
  //add image
  const inputImg = (e) => {
    setImg({ productImage: e.target.files });
  };
  //add status
  const inputStatus = (e) => {
    setStatus({ availableStatus: e.target.checked });
  };
  //refrsh
  const refresh = (e) => {
    e.preventDefault();
  };
  //get all products
  const getProduct = async () => {
    setModalIsOpen(true);

    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await getallProductApi(headers);
      if (response) {
        setModalIsOpen(false);
      }
      console.log("response: ", response);
      setAllProducts(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  //add products
  const addProduct = async () => {
    setModalIsOpen(true);
    try {
      const {
        productName,
        productPrice,
        productBrand,
        productCategory,
        productDescription,
      } = products;
      const { productImage } = Img;
      const { availableStatus } = status;

      const data = {
        productName,
        productPrice,
        productBrand,
        productCategory,
        productImage,
        availableStatus,
        productDescription,
      };
      console.log("data: ", data);
      const fd = new FormData();
      fd.append("productName", productName);
      fd.append("productPrice", productPrice);
      fd.append("productBrand", productBrand);
      fd.append("productCategory", productCategory);
      fd.append("productDescription", productDescription);
      fd.append("availableStatus", availableStatus);

      for (const key of Object.keys(productImage)) {
        fd.append("productImage", productImage[key]);
      }
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const result = await addProductApi(fd, headers);
      console.log("result: ", result);

      if (result) {
        setModalIsOpen(false);
      }
      if (result.status === 200) {
        toast.success("Product added Succesfully!");
      } else {
        toast.error("Product is not added!");
      }
      getProduct();
      setStatus({ availableStatus: false });
      setProducts({
        productName: "",
        productPrice: "",
        productBrand: "",
        productCategory: "",
        productDescription: "",
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
  //delete prodcts api
  const deleteProducts = async (item) => {
    setModalIsOpen(true);
    try {
      const { _id } = item;
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await deleteProductApi(headers, _id);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      if (response.status === 200) {
        toast.success("Product deleted successfully!");
      } else {
        toast.error("Product is not deleted");
      }
      getProduct();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  //edit products api to get data in form
  const editProduct = async (item) => {
    setProducts({
      ...products,

      productName: item.productName,
      productPrice: item.productPrice,
      productBrand: item.productBrand,
      productCategory: item.productCategory,
      productDescription: item.productDescription,
      productId: item._id,
    });
    console.log("products: ", products);
    setStatus({
      ...status,
      availableStatus: item.availableStatus,
    });
    setImg({
      ...Img,
      productImage: item.productImage,
    });
  };
  //updateProducts
  const updateProducts = async () => {
    setModalIsOpen(true);

    try {
      console.log("products: ", products);
      console.log("status: ", status);
      console.log("Img: ", Img);
      const {
        productName,
        productPrice,
        productBrand,
        productCategory,
        productDescription,
      } = products;
      const { availableStatus } = status;
      const { productImage } = Img;
      const _id = products.productId;
      const fd = new FormData();
      fd.append("productName", productName);
      fd.append("productPrice", productPrice);
      fd.append("productBrand", productBrand);
      fd.append("productCategory", productCategory);
      fd.append("availableStatus", availableStatus);
      fd.append("productDescription", productDescription);

      for (const key of Object.keys(productImage)) {
        fd.append("productImage", productImage[key]);
      }
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await updateProductsApi(_id, fd, headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      if (response.status === 200) {
        toast.success("Product updated succesfully!");
      } else {
        toast.error("Product is not updated!");
      }
      getProduct();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="form-main">
        <p className="p-product-admin">Add Products</p>
        <hr style={{ color: "black", border: "2px solid" }}></hr>

        <form className="main-admin-product" onSubmit={refresh}>
          <div className="form-flex-admin">
            <div>
              <p>Product Name</p>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="input-product-admin"
                name="productName"
                value={products.productName}
                onChange={inputData}
              />
              <br></br>
              <p>Product Price</p>
              <input
                type="number"
                placeholder=" Product price"
                min="0"
                className="input-product-admin"
                name="productPrice"
                value={products.productPrice}
                onChange={inputData}
              />
              <br></br>
              <p>Product Brand</p>
              <input
                type="text"
                placeholder="Enter Product brand"
                className="input-product-admin"
                name="productBrand"
                value={products.productBrand}
                onChange={inputData}
              />
              <br></br>
              <p>Product Category</p>
              <input
                type="text"
                placeholder="Enter Product category"
                className="input-product-admin"
                name="productCategory"
                value={products.productCategory}
                onChange={inputData}
              />
              <br></br>
              <p>Product Description</p>
              <input
                type="text"
                placeholder="Enter Product Description"
                className="input-product-admin"
                name="productDescription"
                value={products.productDescription}
                onChange={inputData}
              />
              <br></br>
              <br></br>
            </div>
            <div>
              <div className="upload-btn-wrapper">
                <btn className="btn-admin-product">
                  <i
                    class="fas fa-cloud-upload-alt"
                    style={{ marginTop: "100px" }}
                  ></i>
                </btn>
                <input
                  type="file"
                  multiple
                  name="productImage"
                  onChange={inputImg}
                />
                <br></br>
                <br></br>
              </div>
              <br></br>
              <div className="upload-image-button">
                <button className="btn2-admin-product">
                  UPLOAD PRODUCT IMAGE
                </button>
              </div>
              <br></br>
              <input
                type="checkbox"
                name="availableStatus"
                checked={status.availableStatus}
                onChange={inputStatus}
                className="largeCheckbov-product-admin"
              />
              product is in stock
            </div>
          </div>

          <div className="form-flex-admin">
            <div>
              {" "}
              <button
                className="button-admin-product"
                onClick={() => addProduct()}
              >
                Add product
              </button>
            </div>
            <div>
              {" "}
              <button
                className="button-admin-product"
                onClick={() => updateProducts()}
              >
                update
              </button>
            </div>
          </div>
        </form>
      </div>

      <table cellPadding="10px" className="table-product ">
        <tr className="border-tr table-title">
          <td>Product Image</td>
          <td>Product Name</td>
          <td>Prodct Price</td>
          <td>Prodct Brand</td>
          <td>Prodct Category</td>
          <td>Prodct Description</td>
          <td>Status</td>
          <td></td>
          <td></td>
        </tr>
        {allProducts.map(
          (item) => {
            //    if(item.availableStatus === true){
            return (
              <tr className="border-tr" data-aos="zoom-in-down">
                <td>
                  <img
                    src={item.productImage[0]}
                    style={{ height: "15vh", width: "10vw" }}
                    alt="noImage"
                  />
                </td>
                <td>
                  <p>{item.productName}</p>
                </td>
                <td>
                  <p>{item.productPrice}</p>
                </td>
                <td>
                  <p>{item.productBrand}</p>
                </td>
                <td>
                  <p>{item.productCategory}</p>
                </td>
                <td>
                  <p>{item.productDescription}</p>
                </td>
                <td>
                  {item.availableStatus ? (
                    <p
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      In Stock
                    </p>
                  ) : (
                    <p
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      Out of stock
                    </p>
                  )}
                </td>
                <td>
                  <button
                    title="update"
                    onClick={() => editProduct(item)}
                    className="btn-updateDelte-product"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button
                    title="delete"
                    onClick={() => deleteProducts(item)}
                    className="btn-updateDelte-product"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            );
          }
          //        else if(item.availableStatus === false){
          //         return(

          //            <tr className="border-tr" data-aos="zoom-in-down">
          //                         <td >
          //                             <img src={item.productImage[0]} alt="noImage"/>
          //                          </td>
          //                         <td>
          //                          <p>{item.productName}</p>
          //                         </td>
          //                        <td>
          //                          <p>{item.productPrice}</p>
          //                       </td>
          //                       <td>
          //                      <p>{item.productBrand}</p>
          //                     </td>
          //                      <td>
          //                       <p>{item.productCategory}</p>
          //                     </td>

          //                    <td>
          //                       <button title="update" onClick={()=>editProduct(item)} className="btn-updateDelte-product"><i class="fas fa-edit"></i></button>
          //                   </td>
          //                  <td>
          //                       <button title="delete" onClick={()=>deleteProducts(item)} className="btn-updateDelte-product"><i class="fas fa-trash-alt"></i></button>
          //                  </td>
          //              </tr>

          //    )
          //        }
          //    }
        )}
      </table>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div
          style={{
            width: "7vw",
            height: "13vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Triangle color="black" height={100} width={100} />
        </div>
      </Modal>
    </div>
  );
};
export default Product;
