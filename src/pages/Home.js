import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the IT Department</h1>
      <p>Developing creative problem solvers and IT professionals of tomorrow.</p>

      <div className="activities">
        <h2>Recent Activities</h2>
        <div className="grid">
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/images/1.jpg"} alt="Activity 1" />
            <p>วันรัฐธรรมนูญ</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/images/2.jpg"} alt="Activity 2" />
            <p>วันพ่อแห่งชาติ</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/images/3.jpg"} alt="Activity 3" />
            <p>สมัครเรียน 12 สาขา</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/images/4.jpg"} alt="Activity 4" />
            <p>ช่องทางติดต่อ</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + "/assets/images/5.jpg"} alt="Activity 5" />
            <p>คู่มือการใช้งาน</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;