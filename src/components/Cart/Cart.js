import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const handleCartCLearAll = props.handleCartCLearAll
    const handleCartDel = props.handleCartDel
    const handleCartBestSelect =props.handleCartBestSelect
    const bestCourse=props.bestCourse;
    // console.log(bestName);

    return (
        <div className='cartDetails'>
            <h2>Added Course List: </h2>
            <p>Total Course: {cart.length}</p>
            <p>Total Credit: {cart.length*3} </p>
            {
                cart.map(ct=> <CartItems 
                    key={ct.id} 
                    cartItems={ct}
                    handleCartDel ={handleCartDel}
                    ></CartItems>)
            }
            <button onClick={handleCartCLearAll} className='cartBtnClear'>Clear All</button>
            <button onClick={handleCartBestSelect} className='cartBtnClear'>Best Select</button>
            <div className='cartItems'>
                {/* <img src={bestCourse.img} alt="" /> */}
                <p>{bestCourse.subjectName}</p>
            </div>
        </div>
    );
};

export default Cart;