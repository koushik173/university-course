import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const  {subjectName,Instructor,Schedule,year,Semester,Credit,seatAvailable,img} = props.course

    return (
        <div className='courseContainer'>
            <div className='courseImg'>
                <img src={img} alt="" />
            </div>

            <div className='courseDetail'>
                <h2>{subjectName}</h2>
                <p>Instructor: {Instructor}</p>
                <p>Schedule: {Schedule}</p>
                <p>Year: {year}</p>
                <p>Semester: {Semester}</p>
                <p>Credit: {Credit}</p>
                <p>Seat Available: {seatAvailable}</p><br />
                <button onClick={()=>props.handleAddCart(props.course)}>
                    <p>Add_</p>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    </button>
            </div>
            
        </div>
    );
};

export default Course;