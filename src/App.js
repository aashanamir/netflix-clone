import React, { useEffect } from "react";
import "./app.scss";
import Intro from "./components/intro";
import Home from "./components/home";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firbase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if (user){
        //signin
        dispatch(login({
          uid : user.id,
          email : user.email
        }))
      }
      else{
        //signout
        dispatch(logout);
      }
    })
  },[])

  console.log(user);

  return <div className="app-wrapper">
    {
      !user ? <Intro/> : <Home/>
    }
    </div>
    }
  {/* {!user ? <Intro /> : <Home />}
  </div>;   */}


export default App;
