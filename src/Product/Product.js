import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
console.log(product);
    // const []=props.product;
    const {name, img,brand,color,price} =product;

    return (
        <div>
 <div className="product-container">
  <img src={img} alt="Avatar"/>
<div className='product-info'>
<p className="product-name">{name}</p>
<p className="product-brand">{brand}</p>
<p className="product-color">{color}</p>
<p className="product-price">{price}</p>
</div>
<button onClick={()=>handleAddToCart(product)}  className='btn-cart'>
    <p >Add to cart</p>
</button>
</div>

        </div>
    );
};

export default Product;