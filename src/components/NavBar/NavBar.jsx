import "./NavBar.css";
import logo from "../../img/Tutedude.png";
import React from "react";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="" />
      <ul>
        <li>My Assignment</li>
        <li>Chat with Mentor</li>
        <li>ProfileName</li>
      </ul>
    </div>
  );
};

export default NavBar;
