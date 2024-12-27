import React from "react";

const Courses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="grid">
        <div className="card">
          <h2>High School IT Program</h2>
          <p>Basic IT skills and programming.</p>
          <a href="/assets/pdf/1.pdf" target="_blank" className="btn">View Details (PDF)</a>
        </div>
        <div className="card">
          <h2>Advanced Web Development</h2>
          <p>Focused on web apps and databases.</p>
          <a href="/assets/pdf/2.pdf" target="_blank" className="btn">View Details (PDF)</a>
        </div>
        <div className="card">
          <h2>Data Science Basics</h2>
          <p>Introduction to data analysis and visualization.</p>
          <a href="/assets/pdf/3.pdf" target="_blank" className="btn">View Details (PDF)</a>
        </div>
        <div className="card">
          <h2>Mobile App Development</h2>
          <p>Learn to build mobile applications.</p>
          <a href="/assets/pdf/4.pdf" target="_blank" className="btn">View Details (PDF)</a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
