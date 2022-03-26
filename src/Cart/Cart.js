import React from 'react';
import './Cart.css'

const Cart = ({carts,handleResetCart,handleChooseOneForMe, handleRemoveSingleCartItem}) => {

    return (
        
        <div>
            <h1>Order item</h1>
            {
                carts.map((cart) => {
                    return (
                        <div key={cart.id}>
                            <img src={cart.img} alt="Avatar" width={50}/>
                            <h4>{ cart.name}</h4>
                            <button  onClick={() => handleRemoveSingleCartItem(cart.id)}>remove</button>
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