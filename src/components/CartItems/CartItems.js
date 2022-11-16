import React from 'react';
import './CartItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartItems = (props) => {
    const {subjectName,img}= props.cartItems
    return (
        <div className='cartItems'>
            <img src={img} alt="" />
            <p>{subjectName}</p>
            <button><FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default CartItems;