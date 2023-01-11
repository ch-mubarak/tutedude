import React from "react";
import "./FriendsReferred.css";
import BreadCrump from "../../components/BreadCrump/BreadCrump";
import ReferralCode from "../../components/ReferralCode/ReferralCode";
import Wallet from "../../components/Wallet/Wallet";
import Enrolls from "../../components/Enrolls/Enrolls";
import PageLink from "../../components/PageLink/PageLink";

const FriendsReferred = () => {
  return (
    <div className="friends-referred">
      <BreadCrump location={"friends"} />
      <section>
        <ReferralCode />
        <Wallet />
      </section>
      <Enrolls />
      <PageLink text="Terms & Conditions" />
    </div>
  );
};

export default FriendsReferred;
