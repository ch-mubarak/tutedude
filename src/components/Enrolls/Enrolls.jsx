import React from "react";
import "./Enrolls.css";
import referrals from "../../Data/referrals";
import EnrolledCard from "../EnrolledCard/EnrolledCard";
const Enrolls = () => {
  return (
    <div className="enrolls">
      <h2>
        Friends who enrolled<span>(3)</span>
      </h2>
      <div>
        {referrals.map((item) => {
          return <EnrolledCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Enrolls;
