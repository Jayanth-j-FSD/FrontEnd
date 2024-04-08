// UpdatePassword.js
import React from "react";
import logo2 from "../Assets/Group 16.png";
function UpdatePassword() {
  return (
    <div className="main">
      <div className="left">
        <div className="logo">
          <img src={logo2} alt="logo" className="logox" />
        </div>
        <div className="centered-content">
          <div className="login">
            <div className="welcome">
              <p>Update Password</p>
            </div>
            <div className="text">
              <p>Please enter your new password.</p>
            </div>
            <div>
              <form>
                <input
                  type="password"
                  placeholder="Enter new password"
                  // Add necessary state and onChange handler
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  // Add necessary state and onChange handler
                />
                <button type="submit">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        {/* Right section content */}
      </div>
    </div>
  );
}

export default UpdatePassword;
