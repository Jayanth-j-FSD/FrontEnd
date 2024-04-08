// ForgotPassword.js
import logo2 from "../Assets/Group 16.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle resetting the password
    console.log("Email:", email);
    // After handling the form submission, you can navigate to another page if needed
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="main">
      <div className="left">
        <div className="logo">
          <img src={logo2} alt="logo" className="logox" />
        </div>
        <div className="centered-content">
          <div className="login">
            <div className="welcome">
              <p>Forgot Password?</p>
            </div>
            <div className="text">
              <p>Please enter your email to reset your password.</p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <button type="submit">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
