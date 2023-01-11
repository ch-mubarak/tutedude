import "./NavBar.css";
import logo from "../../img/Tutedude.png";
import React from "react";
import { ReactSVG } from "react-svg";
import user from "../../svg/user.svg";
import dropdown from "../../svg/dropdown.svg";
import dropdownWhite from "../../svg/dropdownWhite.svg";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logo" />
      <ul>
        <li>My Assignment</li>
        <li>Chat with Mentor</li>
        <li>
          <div>
            <ReactSVG src={user} />
            <span>ProfileName</span>
            <ReactSVG src={dropdown} />
          </div>
        </li>
      </ul>
      <div className="navbar-dropdown">
        <span>ProfileName</span>
        <ReactSVG src={dropdownWhite} />
      </div>
    </div>
  );
};

export default NavBar;
