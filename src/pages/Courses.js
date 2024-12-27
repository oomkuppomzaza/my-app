import React from "react";

const Courses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="grid">
        <div className="card">
          <h2>High School IT Program</h2>
          <p>Basic IT skills and programming.</p>
          <button className="btn" onClick={() => window.open('/assets/pdf/1.pdf', '_blank')}>View Details (PDF)</button>
        </div>
        <div className="card">
          <h2>Advanced Web Development</h2>
          <p>Focused on web apps and databases.</p>
          <button className="btn" onClick={() => window.open('/assets/pdf/2.pdf', '_blank')}>View Details (PDF)</button>
        </div>
        <div className="card">
          <h2>Data Science Basics</h2>
          <p>Introduction to data analysis and visualization.</p>
          <button className="btn" onClick={() => window.open('/assets/pdf/3.pdf', '_blank')}>View Details (PDF)</button>
        </div>
        <div className="card">
          <h2>Mobile App Development</h2>
          <p>Learn to build mobile applications.</p>
          <button className="btn" onClick={() => window.open('/assets/pdf/4.pdf', '_blank')}>View Details (PDF)</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;