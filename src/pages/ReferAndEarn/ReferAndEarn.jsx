import React from "react";
import { Link } from "react-router-dom";
import BigReferralCode from "../../components/BigReferralCode/BigReferralCode";
import BreadCrump from "../../components/BreadCrump/BreadCrump";
import Earning from "../../components/Earning/Earning";
import HowDoesItWork from "../../components/HowDoesItWork/HowDoesItWork";
import PageLink from "../../components/PageLink/PageLink";
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
      <div>
        <Link to="/refer/refer-friends">
          <PageLink text="Friends Who Enrolled" />
        </Link>
        <PageLink text="Terms & Conditions" />
      </div>
    </div>
  );
};

export default ReferAndEarn;
