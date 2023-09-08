import React, { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./style.scss";
import { auth } from "../../../firbase";

const Signup = () => {

  const [signUpVal, setSignUpVal] = useState("");
  const [pasVal, setPasVal] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signUpVal, pasVal)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });

    setPasVal("");
    setSignUpVal("");
  };

  const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, signUpVal, pasVal)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });

    setPasVal("");
    setSignUpVal("");
  }


  return (
    <div className="signUp-container">
      <h2>Sign In</h2>
      <form>
        <input
          onChange={(e) => {
            setSignUpVal(e.target.value);
          }}
          value={signUpVal}
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          onChange={(e) => {
            setPasVal(e.target.value);
          }}
          value={pasVal}
          type="password"
          placeholder="Password"
        />
        <button onClick={signIn}
        className="btn">Sign In</button>
        <h4>
          New To Netflix <span onClick={register}>Sign Up Now</span>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
