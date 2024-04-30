import React from "react";
import "../assets/scss/products.scss"
import img from '../assets/img/trainers/line-dec.png'
import product1 from '../assets/img/products/animal-cuts-comprehensive.jpg'


const Products = () => {
    const list=[1,2,3,4,5,6]
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
               {list.map((data)=>{
                    return(
                        <div className="card col-4  product-card">
                             <div className="img-section">
                                <img src={product1} className="img"/>
                            </div>
                            <h4>product Name</h4>
                            <h6>Price</h6>
                            <p>Available Count</p>
                            <div className="main-button">
                                <a href="#">Add to Cart</a>
                            </div>
                        </div>
                    )
               })}
            </div>
        </div>
    </section>
    );
  };
  
  export default Products;