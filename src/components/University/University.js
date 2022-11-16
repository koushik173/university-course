import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './University.css';

const University = () => {
    const [course, setCourse]= useState([])
    const [cart, setCart]= useState([])

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
        const exists = cart.find(course => course.id===selecTedCourse.id)
        if(!exists){
             //selecTedCourse.quantity =1;
             newCart = [...cart ,selecTedCourse]

        }else{
            const rest = cart.filter(course=>course.id !== selecTedCourse.id);
            //exists.quantity = exists.quantity+1;
            //newCart = [exists,...rest];
        }
        setCart(newCart)
        addToDb(selecTedCourse.id);
    }



    return (
        <div className='university-container'>
            
            <div className='course-container'>
                {
                    course.map(un=> <Course key={un.id} handleAddCart = {handleAddCart} course={un}></Course>)
                }
            </div>

            <div className='cartContainer'>
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
    }

export default University;