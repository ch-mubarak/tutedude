import React from "react";
import "./Earning.css";

const Earning = () => {
  return (
    <div className="earning">
      <div>
        <div>
          <h4>Referral Earning</h4>
          <p>₹ 2,500</p>
        </div>
        <div>
          <h4>Total Referrals</h4>
          <p>7</p>
        </div>
        <div>
          <h4>Wallet Balance</h4>
          <p>₹ 500</p>
        </div>
      </div>
      <button className="button">Withdraw Balance</button>
    </div>
  );
};

export default Earning;
