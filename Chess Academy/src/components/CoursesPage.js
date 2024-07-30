import React, { useContext } from 'react';
import courses from './coursesData';
import { CartContext } from './CartContext';
import './CoursesPage.css';

const CoursesPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="courses-page">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>${course.price}</p>
            <button onClick={() => addToCart(course)}>Add to Cart</button>
            <div className="reviews">
              <h4>Reviews:</h4>
              {course.reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <p>"{review.text}"</p>
                  <p>- {review.reviewer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
