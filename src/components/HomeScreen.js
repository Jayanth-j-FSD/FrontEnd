import React from "react";
// import { useNavigate } from "react-router-dom";
import "./home-screen.scss";
import face from "../Assets/Mask group.png";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Coupons from "./Coupons";
function HomeScreen() {
  const [tabState, setTabState] = useState("dashboard");
  //   const navigate = useNavigate();

  const handleTab = (name) => {
    // navigate("/dash-board");
    setTabState(name);
  };

  return (
    <div className="main">
      <div className="left-menu">
        <div className="menu-list">
          <div className="logo-section">
            <img src={face} className="image-logo"></img>Website
          </div>
          <div className="tabs-list">
            <div onClick={() => handleTab("dashboard")}>
              <i>☺</i>Dashboard
            </div>
            <div onClick={() => handleTab("Coupons")}>
              <i>☺</i>Coupons
            </div>
            <div onClick={() => handleTab("History")}>
              <i>☺</i>History
            </div>
            <div onClick={() => handleTab("Settings")}>
              <i>☺</i>Settings
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
            <Coupons/>
          ) : (
            tabState
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
