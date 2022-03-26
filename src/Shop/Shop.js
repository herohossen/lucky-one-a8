import React, {useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [carts,setCarts] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    }, []);
    const handleAddToCart = (product)=>{
        // console.log(product);
        if(carts.length < 4){
            const alreadyAddToCart = carts.find(cart => cart.id === product.id);
            if(alreadyAddToCart) return;
            const  newCarts=[...carts, product];
            setCarts(newCarts);
        }
        
    }

    const handleResetCart = () =>{
        setCarts([]);
    }

    const handleRemoveSingleCartItem = (id) =>{
        const newCarts = carts.filter((cart) => {
            return cart.id !== id;
        });

        setCarts(newCarts);
    }

    const handleChooseOneForMe = () =>{
        const randomItem = [carts[Math.floor(Math.random() * carts.length)]];
        setCarts(randomItem);
    }

    return (
        <div className='shop-container'>
        <div className='products-container'> 
            {
                products.map(product =>(<Product key={product.id} 
                    product={product}
                    handleAddToCart={handleAddToCart}
                    >
                        
                    </Product>))            
            }

        </div>
        <div className='cart-container'> 
            <Cart carts={carts} handleResetCart={handleResetCart} handleChooseOneForMe={handleChooseOneForMe}
            handleRemoveSingleCartItem={handleRemoveSingleCartItem}
            ></Cart>
        
            </div>
        </div>
    );
};

export default Shop;