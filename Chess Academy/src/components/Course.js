import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Course.css'; 

const Course = ({ course }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="course">
      <img src={course.image} alt={course.name} />
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <p>${course.price}</p>
      <button onClick={() => addToCart(course)}>Add to Cart</button>
    </div>
  );
};

export default Course;
