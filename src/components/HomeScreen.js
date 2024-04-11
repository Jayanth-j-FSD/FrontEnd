import React from "react";
import { useNavigate } from "react-router-dom";
import "./home-screen.scss";
import face from "../Assets/Mask group.png";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Coupons from "./Coupons";
import dashboardIcon from "../Assets/dashboard (1) 1.png";
import phone from "../Assets/smartphone (1) 1 (2).png";
import tag from "../Assets/Vector.png";
import bag from "../Assets/bag 1 (1).png";
function HomeScreen() {
  const [tabState, setTabState] = useState("dashboard");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home-screen");
  };
  const handleTab = (name) => {
    setTabState(name);
  };

  return (
    <div className="main">
      <div className="left-menu">
        <div className="menu-list">
          <div className="logo-section">
            <img src={face} className="image-logo" onClick={handleHome}></img>
           <div className="info">
           <p className="name">Anna enabel</p>
            <p className="role">Admin</p>
           </div>
          </div>
          <div className="tabs-list">
            <div onClick={() => handleTab("dashboard")} className="tabs">
              <img src={dashboardIcon} className="icon"></img>Dashboard
            </div>
            <div onClick={() => handleTab("Coupons")} className="tabs">
              <img src={phone} className="icon"></img>Coupons
            </div>
            <div onClick={() => handleTab("History")} className="tabs">
              <img src={tag} className="icon"></img>History
            </div>
            <div onClick={() => handleTab("Settings")} className="tabs">
              <img src={bag} className="icon"></img>Settings
            </div>
          </div>
        </div>
        <div className="logout">Logout</div>
      </div>
      <div className="display">
        <div className="tabs">
          {tabState === "dashboard" ? (
            <Dashboard />
          ) : tabState === "Coupons" ? (
            <Coupons />
          ) : (
            tabState
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
