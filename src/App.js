import "./styles.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import ForgotPassword from "./components/ForgotPassword";
import UpdatePassword from "./components/UpdatePassword";
import HomeScreen from "./components/HomeScreen.js";
import Dashboard from "./components/Dashboard.js";
function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/home-screen" element={<HomeScreen />}></Route>
        {/* <Route path="/dash-board" element={<Dashboard />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
