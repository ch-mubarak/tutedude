import React from "react";
import BigReferralCode from "../../components/BigReferralCode/BigReferralCode";
import BreadCrump from "../../components/BreadCrump/BreadCrump";
import Earning from "../../components/Earning/Earning";
import HowDoesItWork from "../../components/HowDoesItWork/HowDoesItWork";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import "./ReferAndEarn.css";

const ReferAndEarn = () => {
  return (
    <div className="refer-and-earn">
      <BreadCrump />
      <section>
        <Earning />
        <BigReferralCode />
      </section>
      <HowDoesItWork />
      <TermsAndConditions />
    </div>
  );
};

export default ReferAndEarn;
