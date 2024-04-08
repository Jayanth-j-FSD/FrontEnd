import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import love from "../Assets/love-hand-drawn-heart-symbol-outline 1.png";
import logo2 from "../Assets/Group 16.png";
import characters from "../Assets/characters.png";
import { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Basic validation
    if (email === "" || password === "") {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    const validEmail = "user@example.com";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
      navigate("/home-screen");
      // You can redirect the user to another page or perform additional actions upon successful login
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
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
              <p>Welcome Back,</p>
            </div>
            <div className="text">
              <p>Please enter your details to enter.</p>
            </div>
            <div>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="name"
                  placeholder="email address:"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="name"
                  placeholder="password"
                />
                <button type="button" onClick={handleForgotPassword}>
                  Forgot password?
                </button>
                <input id="sub" type="submit" value="Login" />
              </form>
              {errorMessage && (
                <p
                  className="error"
                  style={{
                    transformOrigin: "center",
                    animationIterationCount: "infinite",
                  }}
                >
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="mid">
          <div className="innerRight">
            <img src={characters} className="peopleImg" alt="Background" />
          </div>
          <div className="innerLeft">
            <span>
              <img src={logo2} className="rightLogo" alt="Background" />
            </span>
            <p>We</p>
            <p>
              Love <img src={love} className="loveLogo" alt="Background" />
            </p>
            <p>Website</p>
            <p className="smalltext">
              <i>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
