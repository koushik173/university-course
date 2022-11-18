import React from 'react';
import './CartItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartItems = (props) => {
    const {subjectName,img}= props.cartItems
    const handleCartDel = props.handleCartDel
    return (
        <div className='cartItems'>
            <img src={img} alt="" />
            <p>{subjectName}</p>
            <button onClick={()=>handleCartDel(props.cartItems)}><FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default CartItems;