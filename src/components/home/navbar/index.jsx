import React, { useEffect, useState } from "react";
// import firebase from "firebase";
import { getAuth, signOut } from "firebase/auth";
import "./style.scss";
import Avataar from "../../../images/bg-1.jpg";
import Logo from "../../../images/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const setBackground = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setBackground);
  }, []);

  const logOut = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  return (
    <div className={`navbar ${show && "navbar-dark"}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="avataar" onClick={logOut} >
          <img src={Avataar} alt="Avataar"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
