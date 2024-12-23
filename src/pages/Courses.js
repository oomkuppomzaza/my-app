import React from "react";

const Courses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="grid">
        <div className="card">
          <h2>High School IT Program</h2>
          <p>Basic IT skills and programming.</p>
        </div>
        <div className="card">
          <h2>Advanced Web Development</h2>
          <p>Focused on web apps and databases.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;