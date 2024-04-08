import React from "react";
import "./home.scss";
import love from "../Assets/love-hand-drawn-heart-symbol-outline 1.png";
import logo2 from "../Assets/Group 16.png";
import characters from "../Assets/characters.png";
function Home() {
  return (
    <div className="main">
      <div className="left">
        <div className="logo">
          <img src={logo2} alt="logo" className="logox"></img>
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
              <form>
                <input type="text" name="name" placeholder="email address:" />
                <input type="text" name="name" placeholder="password" />
                <button>Forgot password?</button>
                <input id="sub" type="submit" value="Login" />
              </form>
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
            {" "}
            <span>
              {" "}
              <img src={logo2} className="rightLogo" alt="Background"  ></img>
            </span>
            <p>We</p>
            <p>
              Love <img src={love} className="loveLogo" alt="Background" ></img>
            </p>
            <p>Website</p>
            <p className="smalltext">
              <i>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</i>
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
