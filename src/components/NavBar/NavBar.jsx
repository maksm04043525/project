import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context";

const NavBar = () => {
  const {isAuth,setIsAuth}=useContext(AuthContext);
  const logout=()=>{
    setIsAuth(false)
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/devices">Devices</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><button onClick={logout} className="waves-effect waves-light btn">Logout</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;