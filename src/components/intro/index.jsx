import React, { useState } from "react";
import "./style.scss";
import Logo from "../../images/logo.png";
import Signup from "./signup";

const Intro = () => {
  const [signUp, setSignUp] = useState(false);
  const signUpDisplay = (e) => {
    e.preventDefault();
    setSignUp(true);
  };

  return (
    <div className="intro-page">
      <div className="layer"></div>
      <div className="content">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Moviex" />
          </div>
          <div className="right-side">
            <button
              onClick={() => {
                setSignUp(true);
              }}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="body">
          {signUp ? (
            <Signup />
          ) : (
            <>
              <h2>Unlimited movies, TV shows, and more</h2>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <h4>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <form>
                <input type="email" placeholder="Enter Your Email" />
                <button onClick={signUpDisplay}>Get Started</button>
              </form>
            </>
          )}
        </div>
      </div>
      <div className="black"></div>
    </div>
  );
};

export default Intro;
