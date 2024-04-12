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
    <div className="Screen">
      <img src={dashboardIcon} className="icon"></img>
      <div className="left">
        <div className="logo-name">
          <div>Website</div>
        </div>
        <div className="logo-section">
          <div className="inside-logosection">
            <img src={face} className="image-logo" onClick={handleHome}></img>
            <div className="name">Anna enabel</div>
            <div className="role">Admin</div>
          </div>
        </div>

        <div onClick={() => handleTab("dashboard")} className="dashboard">
          Dashboard
        </div>
        <div onClick={() => handleTab("Coupons")} className="Coupons">
          <img src={phone} className="icon"></img>Coupons
        </div>
        <div onClick={() => handleTab("History")} className="History">
          <img src={tag} className="icon"></img>History
        </div>
        <div onClick={() => handleTab("Settings")} className="Settings">
          <img src={bag} className="icon"></img>Settings
        </div>
        <div className="logout">
          <div>Logout</div>
        </div>
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
