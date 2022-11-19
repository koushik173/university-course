import React, { useEffect, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './University.css';


const University = () => {
    const [course, setCourse]= useState([])
    const [cart, setCart]= useState([])
    const [rCart, setRCart] = useState([])

    useEffect(()=>{
        fetch('courses/subject.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart=[];
        for (const id in storedCart) {
            const addedCourse = course.find(pd=>pd.id===id);
            if(addedCourse){
                const quantity = storedCart[id];
                addedCourse.quantity = quantity;
                savedCart.push(addedCourse);
            }
        }
        setCart(savedCart)

    },[course]);

    const handleAddCart= (selecTedCourse)=>{
        let newCart =[]
       if(cart.length<4){
        const exists = cart.find(course => course.id===selecTedCourse.id)
        if(!exists){
             //selecTedCourse.quantity =1;
             newCart = [...cart ,selecTedCourse]
             setCart(newCart)
             addToDb(selecTedCourse.id);
        }else{
            const rest = cart.filter(course=>course.id !== selecTedCourse.id);
            //exists.quantity = exists.quantity+1;
            //newCart = [exists,...rest];
            //alert("Already Exists")
            toast("You Already Added This Course!",{
                position: 'top-center',
                autoClose: 1000,
                theme: "dark"
            });
        }
       }
       else{
            toast("You can not added more than 4!",{
                position: 'top-center',
                autoClose: 1000,
                theme: "dark"
            });

       }
        
    }
    const handleCartCLearAll =()=>{
        setCart([])
        deleteShoppingCart()
    }
    const handleCartDel =(selectedCourse)=>{
        const exists = cart.find(course=>course.id==selectedCourse.id)
        if(exists){
            setCart(cart.filter(course=> course !=selectedCourse))
            removeFromDb(selectedCourse.id)
        }
    }
    
    const handleCartBestSelect =()=>{

        if(cart.length==0){
            toast("Your Cart is Empty!",{
                position: 'top-center',
                autoClose: 1000,
                theme: "dark"
            });
            setRCart([])
        }
        else{
            const ranNum = Math.floor(Math.random()*cart.length)
            setRCart(cart[ranNum])
        }
    }



    return (
        <div className='university-container'>
            
            <div className='course-container'>
                {
                    course.map(un=> <Course key={un.id} handleAddCart = {handleAddCart} course={un}></Course>)
                }
            </div>
            <div className='cartContainer'>
                <Cart 
                cart = {cart} 
                handleCartDel={handleCartDel} 
                handleCartCLearAll={handleCartCLearAll}
                handleCartBestSelect ={handleCartBestSelect}
                bestCourse={rCart}
                ></Cart>
            </div>
            <ToastContainer />

            
        </div>
    );
    }

export default University;