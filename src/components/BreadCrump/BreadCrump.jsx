import "./BreadCrump.css";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrump = ({ location }) => {
  return (
    <div className="bread-crump">
      <p>
        {"UI/UX > "}<Link to="/">Refer & Earn</Link>
        {location === "friends" && (
          <Link to="/refer/refer-friends">{" > "}Friends Referred</Link>
        )}
      </p>
    </div>
  );
};

export default BreadCrump;
