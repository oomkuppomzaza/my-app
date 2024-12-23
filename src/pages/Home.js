import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the IT Department</h1>
      <p>Developing creative problem solvers and IT professionals of tomorrow.</p>
      <div className="activities">
        <h2>Recent Activities</h2>
        <div className="grid">
          <div className="card">Activity 1</div>
          <div className="card">Activity 2</div>
          <div className="card">Activity 3</div>
        </div>
      </div>
    </div>
  );
};

export default Home;