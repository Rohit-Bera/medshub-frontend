import React from "react"
import "./style/Product.css"
import Navbar from "./Navbar"
import  { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import {getallProductApi,addProductApi,deleteProductApi,updateProductsApi} from "../Data/Services/Oneforall";
import Aos from "aos";
import "aos/dist/aos.css";

const Product = () =>{
    //add product state
    const [products,setProducts] = useState({
        productName:"",
        productPrice:null,
        productBrand:"",
        productCategory:"",
        productId:"",
    });
    // add img state
    const[Img,setImg] = useState({
        productImage:[],
    });
    //add status state
    const[status,setStatus]=useState({
        availableStatus:"",
    });
    useEffect(() => {
        getProduct();
      }, []);
      useEffect(()=>{
        Aos.init({duration:2000});
      },[]);
    //all products state 
    const [allProducts,setAllProducts]= useState([]);
    //token
    const token =  useSelector((state)=>state.adminReducer).token;
    //add data
    const inputData=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setProducts({...products,[name]:value})
    };
    //add image
    const inputImg=(e)=>{
        setImg({productImage:e.target.files});
    };
    //add status
    const inputStatus=(e)=>{
        setStatus({availableStatus:e.target.checked});
    };
    //refrsh
    const refresh=(e)=>{
        e.preventDefault();
    };
    //get all products
    const getProduct = async()=>{
        try {
        const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await getallProductApi(headers);
            console.log('response: ', response);
            setAllProducts(response.data);
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
    //add products 
    const addProduct = async()=>{
        try {
            const {productName,productPrice,productBrand,productCategory} = products;
            const {productImage} = Img;
            const {availableStatus}= status;

            const data = {
                
                productName,
                productPrice,
                productBrand,
                productCategory,
                productImage,
                availableStatus
            }
            console.log('data: ', data);
            const fd = new FormData();
            fd.append("productName",productName);
            fd.append("productPrice",productPrice);
            fd.append("productBrand",productBrand);
            fd.append("productCategory",productCategory);
            fd.append("availableStatus",availableStatus);


            for(const key of Object.keys(productImage)){
                fd.append("productImage",productImage[key]);
            }
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const result = await addProductApi(fd,headers);
            return result;


        } catch (error) {
            console.log('error: ', error);
            
        }
        setStatus({availableStatus:false});
        setProducts({
            productName:"",
        productPrice:"",
        productBrand:"",
        productCategory:"",
        });
    };
    //delete prodcts api
    const deleteProducts = async(item)=>{
        try {
            const {_id} = item ;
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await deleteProductApi(headers,_id);
            console.log('response: ', response);
            getProduct();
        } catch (error) {
            console.log('error: ', error);
            
        }
    };
    //edit products api to get data in form
    const editProduct = async(item)=>{
        setProducts({
            ...products,
            
            
            "productName":item.productName,
            "productPrice":item.productPrice,
            "productBrand":item.productBrand,
            "productCategory":item.productCategory,
            "productId":item._id,
        });
        console.log('products: ', products);
        setStatus({
            ...status,
            "availableStatus":item.availableStatus,
        })
        setImg({
            ...Img,
            "productImage":item.productImage,
        })
    }
    const updateProducts = async()=>{
        try{
            console.log('products: ', products);
            console.log('status: ', status);
            console.log('Img: ', Img);
            const{
                productName,
                productPrice,
                productBrand,
                productCategory,
            }=products;
            const {availableStatus} = status;
            const {productImage} = Img
            const _id = products.productId
            const fd = new FormData();
            fd.append("productName",productName);
            fd.append("productPrice",productPrice);
            fd.append("productBrand",productBrand);
            fd.append("productCategory",productCategory);
            fd.append("availableStatus",availableStatus);

            for(const key of Object.keys(productImage)){
                fd.append("productImage",productImage[key]);
            }
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await updateProductsApi(_id,fd,headers)
            console.log('response: ', response);
            getProduct();

        }
        catch(error)
        {
            console.log('error: ', error);
            
        }
    }
    return <div>
        <Navbar/>
        <h2 className="h2-product-admin">Product</h2>
        <form className="main-admin-product" onSubmit={refresh}>
            <input type="text" 
            placeholder="Enter Product Name" 
            className="input-product-admin"
            name="productName"
            value={products.productName} 
            onChange={inputData}
            /><br></br><br></br>
            <input type="number" 
            placeholder=" Product price" 
            min="0" 
            className="input-product-admin"
            name="productPrice"
            value={products.productPrice}
            onChange={inputData} /><br></br><br></br>
            <input type="text" 
            placeholder="Enter Product brand" 
            className="input-product-admin"
            name="productBrand"
            value={products.productBrand} 
            onChange={inputData}/><br></br><br></br>
            <input type="text" 
            placeholder="Enter Product category" 
            className="input-product-admin"
            name="productCategory"
            value={products.productCategory}
            onChange={inputData} /><br></br><br></br>
            <input type="file"
            multiple
            name="productImage"
            onChange={inputImg}/><br></br><br></br>
            <input type="checkbox"
             name="availableStatus"
            checked={status.availableStatus}
            onChange={inputStatus}/>product is in stock<br></br><br></br>
            <button className="button-admin-product" onClick={()=>addProduct()}>Add product</button>
            <button className="button-admin-medicine" onClick={()=>updateProducts()}>update</button>
        </form>

            
             <table cellPadding="20px"  className="table-product" >
             <tr className="border-tr" >
                    <td>Product Image</td>
                    <td>Product Name</td>
                    <td>Prodct Price</td>
                    <td>Prodct Brand</td>
                    <td>Prodct Category</td>
                    {/* <td></td>
                    <td></td> */}
             </tr>
             {
           allProducts.map((item)=>{
               return(
                   
                      
                       <tr className="border-tr" data-aos="zoom-in-down">
                                             <td >
                                                 <img src={item.productImage[0]} alt="noImage"/>
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
                                             <p title="update" onClick={()=>editProduct(item)}><i class="fas fa-edit"></i></p>
                                             </td>
                                             <td>
                                                 <p title="delete" onClick={()=>deleteProducts(item)}><i class="fas fa-trash-alt"></i></p>
                                             </td>
                         </tr>
                       
                    
               )
           })
       }
             </table>
      
    </div>
}
export default Product;