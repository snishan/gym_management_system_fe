import React,{useEffect,useState} from "react";
import "../assets/scss/products.scss"
import img from '../assets/img/trainers/line-dec.png'
import product1 from '../assets/img/products/animal-cuts-comprehensive.jpg'
import apiClient from "../Services/index"
import { Urls } from "../urls/index";
import toast from "react-hot-toast";

const Products = () => {
    const [productList, setProductList] = useState([]);
    const loginStatus= localStorage.getItem('userLogin')
    const [role, setRole] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        getProducts()
        if (loginStatus !==null) {
            var myObj = JSON.parse(loginStatus);
            console.log("myObj",myObj);
            setRole(myObj.userRole)
            setUserId(myObj.id)
           }else{
            setRole('')
            setUserId('')
        }
    }, [])

    const getProducts = async () => {
        try {
            const response = await apiClient.get(Urls.get_products);
            if (response) {
                setProductList(response.data.data)
            }

        } catch (error) {
            

        }
    }

    const handleAddToCart=async (data)=>{
        if(role=='MEMBER'){
            try {
                const response = await apiClient.post(Urls.add_to_cart(userId,data.id));
                if (response) {
                    toast.success("Product Added Successfully")
                    getProducts()
                }
    
            } catch (error) {
                toast.error(error.response.data.message ?? "Something went wrong")
    
            }
        }else{
            toast.error("You must be a member to purchase products.")
        }
    }
    return (
    <section className="section" id="Products">
        <div className="container">
        <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Supportive  <em>Products</em></h2>
                        <img src={img} alt=""/>
                        <p>Discover our range of supportive products designed to enhance your fitness journey. From high-quality supplements to comfortable workout gear, we provide everything you need to optimize performance, recovery, and overall well-being.</p>
                    </div>
                </div>
            </div>
            <div className="row">
               {productList.map((data)=>{
                    return(
                        <div className="card col-4  product-card">
                             <div className="img-section">
                                <img src={"data:image/png;base64," + data.imageData} className="img"/>
                            </div>
                            <h4>{ data.name}</h4>
                            <h4>{ data.content}</h4>
                            <h6>Price (Rs.) { data.price}</h6>
                            <p>Available Count: { data.count}</p>
                            <div onClick={()=>handleAddToCart(data)} className="main-button">
                                <a>Add to Cart</a>
                            </div>
                        </div>
                    )
               })}
               {productList.length==0?<center><h3>No Products Available</h3></center>:''}
            </div>
        </div>
    </section>
    );
  };
  
  export default Products;