import React from "react";
import "./ReferAndEarn.css";
import NavBar from "../../components/NavBar/NavBar";
import BreadCrump from "../../components/BreadCrump/BreadCrump";
import ReferralCode from "../../components/ReferralCode/ReferralCode";
import Wallet from "../../components/Wallet/Wallet";
import Enrolls from "../../components/Enrolls/Enrolls";

const ReferAndEarn = () => {
  return (
    <div className="refer-and-earn">
      <NavBar />
      <main>
        <BreadCrump />
        <section>
          <ReferralCode />
          <Wallet />
        </section>
        <Enrolls />
      </main>
    </div>
  );
};

export default ReferAndEarn;
