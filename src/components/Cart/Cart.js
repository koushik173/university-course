import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
 

    return (
        <div className='cartDetails'>
            <h2>Added Course List: </h2>
            <p>Total Order: {cart.length}</p>
            {
                cart.map(ct=> <CartItems key={ct.id} cartItems={ct}></CartItems>)
            }
            
        </div>
    );
};

export default Cart;