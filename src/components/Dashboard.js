import React from "react";
import "./dashboard.scss";
import tick from "../Assets/tick (1) 1.png";
import like from "../Assets/like 1.png";
import cross from "../Assets/close (2) 1.png";
import alert from "../Assets/alert 1.png";
function Dashboard() {
  return (
    <div className="dash-main">
      <div className="top-nav">
        <h4>Dashboard</h4>
      </div>
      <div className="tab-section">
        <div className="tab">
          <div className="img-back">
            <img src={tick} className="tick"></img>
          </div>
          <div>
            <h5>12000</h5>
            <p>Active coupons</p>
          </div>
        </div>
        <div className="tab">
          <div className="img-back">
            <img src={like} className="like"></img>
          </div>
          <div>
            <h5>12000</h5>
            <p>Used coupons</p>
          </div>
        </div>
        <div className="tab">
          <div className="img-back">
            <img src={cross} className="cross"></img>
          </div>
          <div>
            <h5>12000</h5>
            <p>Expired </p>
          </div>
        </div>
        <div className="tab">
          <div className="img-back">
            <img src={alert} className="alert"></img>
          </div>
          <div>
            <h5>12000</h5>
            <p>Blocked </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
