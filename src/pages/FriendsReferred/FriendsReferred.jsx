import React from "react";
import "./FriendsReferred.css";
import NavBar from "../../components/NavBar/NavBar";
import BreadCrump from "../../components/BreadCrump/BreadCrump";
import ReferralCode from "../../components/ReferralCode/ReferralCode";
import Wallet from "../../components/Wallet/Wallet";
import Enrolls from "../../components/Enrolls/Enrolls";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";

const FriendsReferred = () => {
  return (
    <div className="friends-referred">
      <BreadCrump />
      <section>
        <ReferralCode />
        <Wallet />
      </section>
      <Enrolls />
      <TermsAndConditions />
    </div>
  );
};

export default FriendsReferred;
