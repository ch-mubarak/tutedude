import React from "react";
import BreadCrump from "../../components/BreadCrump/BreadCrump";
import Earning from "../../components/Earning/Earning";
import ReferralCode from "../../components/ReferralCode/ReferralCode";
import "./ReferAndEarn.css";

const ReferAndEarn = () => {
  return (
    <div className="refer-and-earn">
      <BreadCrump />
      <section>
        <Earning />
        <ReferralCode />
      </section>
    </div>
  );
};

export default ReferAndEarn;
