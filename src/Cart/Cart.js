import React from 'react';
import './Cart.css'
import { MdDelete } from 'react-icons/md';
const Cart = ({carts,handleResetCart,handleChooseOneForMe, handleRemoveSingleCartItem}) => {

    return (
        
        <div>
            <h1>Order item</h1>
            {
                carts.map((cart) => {
                    return (
                        <div key={cart.id}>
                            <div className='cart-info'>
                            <img src={cart.img} alt="Avatar" width={50}/>
                            <p>{ cart.name}</p>
                            <button className='btn-removesingleCart'  onClick={() => handleRemoveSingleCartItem(cart.id)}><MdDelete/></button>
                            </div>

                        </div>
                    );
                })
            }
            <button className='btn-choseOneForMe' onClick={handleChooseOneForMe}>Choose 1 for me</button>
            <button className='btn-choseAgain' onClick={handleResetCart}>Choose Again</button>
        </div>
    );
};

export default Cart;