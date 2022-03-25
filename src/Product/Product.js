import React from 'react';
import './Product.css'

const Product = ({product}) => {

    // const []=props.product;
    const {name, img,brand,color,price} =product;
    return (
        <div>
 <div class="product-container">
  <img src={img} alt="Avatar"/>
  <div class="container">
    <h4>{name}</h4> 
    <h4>{brand}</h4> 
    <h4>{color}</h4> 
    <h4>{price}</h4> 
    
  </div>
</div>

        </div>
    );
};

export default Product;